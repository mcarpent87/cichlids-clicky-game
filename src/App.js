//import dependencies
import React, { Component } from "react";
import FishCard from "./components/FishCard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import fish from "./fish.json";
import "./App.css";

//Set state to 0 or empty
class App extends Component {
  // Setting this.state.fish to the fish json array
  state = {
    message: "Click on an image to begin!",
    fish,
    clickedFish: [], 
    topScore: 0,
    curScore: 0
  };

  //when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentFish = event.target.alt;
    const FishAlreadyClicked =
      this.state.clickedFish.indexOf(currentFish) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (FishAlreadyClicked) {
      this.setState({
        fish: this.state.fish.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        message: "Incorrect, try again!",
        clickedFish: [],
        curScore: 0,
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore
      });
        
//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          fish: this.state.fish.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFish: this.state.clickedFish.concat(
            currentFish
          ),
          message: "Correct",
          curScore: this.state.curScore +1,
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.curScore === 12) {
            this.setState({
              fish: this.state.fish.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFish: [],
              curScore: 0,
              message: "You Win!",
            });
          }
        }
      );
    }
  };


  // Render Navbar, jumbotron, Wrapper, Title, Fish Cards, Footer
  render() {
    return (
      <div>
        <Navbar 
          // message={this.state.message}
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
    
      
      <div className = "wrapper">
        <Wrapper>
          {this.state.fish.map(friend => (
            <FishCard
              imageClick={this.imageClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
