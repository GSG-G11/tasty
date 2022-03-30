import React, { Component } from 'react';
import Add from './components/Add';
import Navbar from './components/Navbar';
import RecipiesList from './components/RecipiesList';

class App extends Component {
  state = {
    apiData: [],
    name: '',
    instructions: '',
    image:'',
    id: 11,
    display:false,
    index:""
  };
  handleChange=({target})=>{
    this.setState({
      [target.name]:target.value
    })
    

  }
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
  }

  editRecipy = (id) => {
    const { apiData } = this.state
    this.handleDisplayForm()
    let index = apiData.findIndex((item) => {
      return item.id === id
    })
    const{name,image,instructions}=apiData[index]
  

    this.setState({
     name,
     image,
     instructions,
     index

    })
    
   
  }
  handleAddData = (e,indexRecipy) => {
    e.preventDefault();

    if(!indexRecipy){
      const { id } = this.state
      const { name, instructions, image } = e.target
      this.setState((prevState) => (prevState.id = prevState.id + 1))
      this.setState({
        display:false,
        name:"",
        instructions:"",
        image:""
      })
     
      this.handleAddToApiData(name.value, instructions.value, image.value, id, true)
    }else{
      const { apiData } = this.state
      const { name, instructions, image } = e.target
      apiData[indexRecipy].name = name.value
      apiData[indexRecipy].instructions = instructions.value
      apiData[indexRecipy].image=image.value

      this.setState({
        apiData,
        index:"",
        display:false,
        name:"",
        instructions:"",
        image:""
      })
    }
   

  };
  handleDelete = (id) => {
    this.setState((prevState) => ({
      apiData: prevState.apiData.filter((ele) => ele.id !== id),
    }));}

    handleDisplayForm=()=>{
    
      this.setState((prevState)=>prevState.display= !prevState.display)
    }
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
     
      const { apiData, name, instructions, image,display,index } = this.state;
      return <div>

        <Navbar DisplayForm={this.handleDisplayForm}/>
        {display?  <Add name={name}
          instructions={instructions}
          image={image}
          index={index}
          handleAddData={this.handleAddData}
          addRecipy={this.addRecipy} handleChange={this.handleChange} /> : null}
      
        <RecipiesList apiData={apiData}
          editRecipy={this.editRecipy}
          handleDelete={this.handleDelete} />
      </div>;
    }
  }

export default App;
