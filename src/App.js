import React, { Component } from 'react';
import Add from './components/Add';
import RecipiesList from './components/RecipiesList';

class App extends Component {
  state = {
    apiData: [],
    name: "",
    description: "",
    url: "",
    id:11
  };
  handleAddToApiData = (name, instructions, image ,id,isOwn) => {
    this.setState((prevState) => ({
      apiData: [
        ...prevState.apiData,
        {
          name,
          instructions,
          image,
          id,
          isOwn
        },
      ],
    }));
  }
  addRecipy = () => {

    const { name, url, description,id } = this.state
    this.handleAddToApiData(name, description, url,id ,true)
    this.setState((prevState)=>(prevState.id = prevState.id +1))
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      
    })
  }
  componentDidMount() {
    for (let i = 1; i <= 10; i++) {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then(({ meals: [{ strMeal, strInstructions, strMealThumb }] }) => {
          this.handleAddToApiData(strMeal, strInstructions, strMealThumb ,i,false)
        });
    }
  }
  render() {
    const { apiData, name, description, url } = this.state;
    console.log(apiData)
 
    return <div>
         
      <Add name={name} description={description} url={url} handleChange={this.handleChange} addRecipy={this.addRecipy} />
      <RecipiesList apiData={apiData} />
    </div>;
  }
}

export default App;
