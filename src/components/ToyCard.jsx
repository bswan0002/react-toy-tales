import React, { Component } from "react";

class ToyCard extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt="Toyname" className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button
          className="like-btn"
          onClick={() =>
            this.props.addLike(this.props.toy.id, this.props.toy.likes + 1)
          }
        >
          Like {"<3"}
        </button>
        <button
          className="del-btn"
          onClick={() => this.props.donateToy(this.props.toy.id)}
        >
          Donate to GoodWill
        </button>
      </div>
    );
  }
}

export default ToyCard;
