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

  editRecipy=(id)=>{
    const {apiData}=this.state
    let idforRecipy = apiData.findIndex((item) => {
      return item.id === id
    })
    apiData[idforRecipy].name="add"
    apiData.description="add"
    this.setState({
      apiData
    })
  }
  handleAddData= (e) => {
    e.preventDefault();
    const {id}=this.state
    const {name ,description,url }=e.target
    this.setState((prevState)=>(prevState.id = prevState.id +1))
    this.handleAddToApiData(name.value, description.value, url.value,id ,true)
    
  };
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
    
 
    return <div>
         
      <Add name={name} description={description} url={url} handleAddData={this.handleAddData} addRecipy={this.addRecipy} />
      <RecipiesList apiData={apiData} editRecipy={this.editRecipy}  />
    </div>;
  }
}

export default App;
