import React, { Component } from 'react';

class App extends Component {
  state = {
    apiData: [],
  };
  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then(({ meals: [{ strMeal, strInstructions, strMealThumb }] }) => {
          this.setState((prevState) => ({
            apiData: [
              ...prevState.apiData,
              {
                name: strMeal,
                instructions: strInstructions,
                image: strMealThumb,
              },
            ],
          }));
        });
    }
  }

  render() {
    const { apiData } = this.state;
    return <div></div>;
  }
}

export default App;
