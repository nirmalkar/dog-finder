import React, { Component } from 'react'
import Routes from './Routes'
import whiskey from './assets/whiskey.jpg'
import hazel from './assets/hazel.jpg'
import tubby from './assets/tubby.jpg'
import Navbar from './Components/Navbar'
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {

    return (
      <div className="App" >
        <Navbar dogs={this.props.dogs} />
        <Routes dogs={this.props.dogs} />
      </div>
    );
  }
}

export default App;
