import React, { Component } from "react";
import RenderShoeShop from "./ShoeShopServ/RenderShoeShop";
import dataShoe from "../Data/shoeData.json";
import ModalShoe from "./ShoeShopServ/ModalShoe";

export default class BodyShoeShop extends Component {
  state = {
    showShoe: dataShoe[0],
    
  };
  RenderShoeShop = () => {
    return dataShoe.map((ele) => {
      return (
        <RenderShoeShop
          renderShoe={ele}
          selectedShoe={this.changeStateShoe}
          showShoe={this.state.showShoe}
          key={ele.id}
        />
      );
    });
  };
  changeStateShoe = (shoe) => {
    console.log("1",shoe);
    this.setState({
      showShoe: shoe,
    });
  };
  render() {
    return (
      <div className="container">
        <div
          className="row"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          {this.RenderShoeShop()}
        </div>
      </div>
    );
  }
}
