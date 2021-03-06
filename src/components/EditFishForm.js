import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.object,
    index: PropTypes.string.isRequired,
    deleteFish: PropTypes.func,
    updateFish: PropTypes.func
  };

  handleChange = e => {
    const newValue = e.currentTarget.value;
    const fieldName = e.currentTarget.name;
    const updatedFish = { ...this.props.fish, [fieldName]: newValue };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const { name, price, status, desc, image } = { ...this.props.fish };

    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <select name="status" onChange={this.handleChange} value={status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          defaultValue={desc}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="image"
          value={image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
