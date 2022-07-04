import React, { Component } from "react";
import ModalShoe from "./ModalShoe";

export default class RenderShoeShop extends Component {
  render() {
    const {
      id,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = this.props.renderShoe;
    return (
      <div className="card" style={{ width: "18rem", margin: "1em" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "1em" }}>
            {name}
          </h5>
          <p className="card-text" style={{ fontSize: "0.7em" }}>
            {shortDescription}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#staticBackdrop" + id}
            onClick={() => {
              {
                this.props.selectedShoe(this.props.renderShoe);
              }
            }}
          >
            Show more
          </button>
          <div>
            <ModalShoe showShoe = {this.props.showShoe} modalShoe={this.props.renderShoe}/>
          </div>
        </div>
      </div>
    );
  }
}
