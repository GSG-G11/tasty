import React, { Component } from 'react';
import Add from './components/Add';
import Navbar from './components/Navbar';
import RecipiesList from './components/RecipiesList';

class App extends Component {
  state = {
    apiData: [],
    name: '',
    instructions: '',
    image: '',
    index: '',
    id: 11,
    display: false,
    filteredArray: [],
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleAddToApiData = (name, instructions, image, id, isOwn) => {
    this.setState((prevState) => ({
      apiData: [ 
        ...prevState.apiData,  
        {
          name,
          instructions,
          image,
          id,
          isOwn,
        },
       
      ],
    }));
  };

  handleEdit = (id) => {
    const { apiData } = this.state;
    this.handleDisplayForm();
    let index = apiData.findIndex((item) => item.id === id);
    const { name, image, instructions } = apiData[index];
    this.setState({
      name,
      image,
      instructions,
      index,
    });
  };

  handleAddData = (e, indexRecipy) => {
    e.preventDefault();
  
    const { name, instructions, image } = e.target;
    const { id, apiData } = this.state;
    if (!indexRecipy) {
      this.setState((prevState) => (prevState.id = prevState.id + 1));
      this.setState({
        title:"add",
        display: false,
        name: '',
        instructions: '',
        image: '',
      });
      this.handleAddToApiData(
        name.value,
        instructions.value,
        image.value,
        id,
        true
      );
    } else {
      apiData[indexRecipy].name = name.value;
      apiData[indexRecipy].instructions = instructions.value;
      apiData[indexRecipy].image = image.value;
      this.setState({
        title:"edit",
        apiData,
        index: '',
        display: false,
        name: '',
        instructions: '',
        image: '',
        searchTerm: '',
        myRecepies: false,
      });
    }
  };
  handleDelete = (id) => {
    this.setState((prevState) => ({
      apiData: prevState.apiData.filter((ele) => ele.id !== id),
    }));
  };

  handleDisplayForm = () => {
    this.setState((prevState) => (prevState.display = !prevState.display));
    this.setState({
      index: '',
      name: '',
      instructions: '',
      image: '',
    });
  };
  handleSearch = (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    this.setState({ searchTerm });
  };
  handleMyRecepies = () => {
    this.setState({ myRecepies: true });
  };
  handleHomePage = () => {
    this.setState({ myRecepies: false });
  };
  componentDidMount() {
    for (let i = 1; i <= 10; i++) {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then(({ meals: [{ strMeal, strInstructions, strMealThumb }] }) => {
          this.handleAddToApiData(
            strMeal,
            strInstructions,
            strMealThumb,
            i,
            false
          );
        });
    }
  }
  render() {
    const { apiData, name, instructions, image, display, index } = this.state;
    return (
      <>
        <Navbar
          DisplayForm={this.handleDisplayForm}
          handleSearch={this.handleSearch}
          handleMyRecepies={this.handleMyRecepies}
          handleHomePage={this.handleHomePage}
        />
        {display ? (
          <Add
            name={name}
            instructions={instructions}
            image={image}
            index={index}
            handleAddData={this.handleAddData}
            addRecipy={this.addRecipy}
            handleChange={this.handleChange}
            DisplayForm={this.handleDisplayForm}
          />
        ) : null}

        {apiData.length ? (
          <RecipiesList
            apiData={apiData}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            searchTerm={this.state.searchTerm}
            myRecepies={this.state.myRecepies}
          />
        ) : (
          <div className="loader"></div>
        )}
      </>
    );
  }
}

export default App;
