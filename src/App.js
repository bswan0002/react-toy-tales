import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

class App extends React.Component {
  state = {
    display: false,
    toys: [],
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  createToy = (toyName, toyImage) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        "name": toyName,
        "image": toyImage,
        "likes": 0,
      }),
    };
    fetch("http://localhost:3001/toys", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          toys: this.state.toys.concat([data]),
        });
      });
  };

  donateToy = (toyId) => {
    const url = `http://localhost:3001/toys/${toyId}`;

    const toyIndex = this.state.toys.findIndex((toy) => toy.id === toyId);
    const newToys = [...this.state.toys];
    newToys.splice(toyIndex, 1);

    fetch(url, { method: "DELETE" }).then(() => {
      this.setState({
        ...this.state,
        toys: newToys,
      });
    });
  };

  addLike = (toyId, newLikes) => {
    const url = `http://localhost:3001/toys/${toyId}`;
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "likes": newLikes,
      }),
    };

    const toyIndex = this.state.toys.findIndex((toy) => toy.id === toyId);
    const newToys = [...this.state.toys];
    newToys[toyIndex].likes = newLikes;

    fetch(url, requestOptions)
      .then((res) => res.json())
      .then(() => {
        this.setState({
          ...this.state,
          toys: newToys,
        });
      });
  };

  componentDidMount() {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((toys) => {
        this.setState({
          ...this.state,
          toys: toys,
        });
      });
  }

  render() {
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm createToy={this.createToy} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={this.state.toys}
          addLike={this.addLike}
          donateToy={this.donateToy}
        />
      </>
    );
  }
}

export default App;
