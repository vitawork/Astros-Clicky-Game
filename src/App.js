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
    topscore: 0,
    cliked: []
  };

  componentDidMount() {
    this.random();
    document.getElementById("mes").innerHTML = "";
  }

  clickCard = id => {
    document.getElementById("cards").className = "";
    this.random();
    const clicked = this.state.cliked;
    if (clicked.includes(id)) {
      this.setState({ score: 0, cliked: [] });
      document.getElementById("cards").className = "shake";
    } else {
      clicked.push(id);
      let score = this.state.score + 1;
      let topscore = this.state.topscore;
      if (score > topscore) topscore += 1;

      this.setState({ score, topscore, clicked });
    }
  };

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

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Head />

        <div id="cards" class="">
          <main class="container">
            {this.state.playersState.map(item => {
              return (
                <Card
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  num={item.num}
                  info={item.info}
                  clickCard={() => this.clickCard(item.id)}
                />
              );
            })}
          </main>
        </div>
        <footer class="footer">World Series 2019</footer>
      </Wrapper>
    );
  }
}

export default App;
