import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import players from "./players.json";
import "./App.css";

class App extends React.Component {
  state = {
    playersState: players,
    score: 0,
    topscore: 0
  };

  componentDidMount() {
    this.random();
  }

  random = () => {
    const playersState = this.state.playersState;
    let i = playersState.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = playersState[i];
      playersState[i] = playersState[j];
      playersState[j] = temp;
    }
    this.setState({ playersState });
  };

  removeF = id => {
    console.log("is this hitting");
    const playersState = this.state.playersState.filter(
      player => player.id !== id
    );
    console.log(playersState);
    // this.state.playersState = playersState
    this.setState({ playersState });
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Head />
        <main class="container">
          {this.state.playersState.map(item => {
            return (
              <Card
                key={item.id}
                name={item.name}
                image={item.image}
                num={item.num}
                info={item.info}
                remF={() => this.removeF(item.id)}
              />
            );
          })}
        </main>
      </Wrapper>
    );
  }
}

export default App;
