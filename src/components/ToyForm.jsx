import React, { Component } from "react";

class ToyForm extends Component {
  state = {
    toyName: "",
    toyImage: "",
  };

  handleNameChange = (e) => {
    this.setState({
      toyName: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      toyImage: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createToy(this.state.toyName, this.state.toyImage);
  };

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            value={this.state.toyName}
            onChange={this.handleNameChange}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            value={this.state.toyImage}
            onChange={this.handleImageChange}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
