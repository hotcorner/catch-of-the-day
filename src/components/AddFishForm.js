import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    this.props.addFish(fish);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createFish} className="fish-edit">
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="image"
        />
        <button type="submit">Add fish</button>
      </form>
    );
  }
}

export default AddFishForm;
