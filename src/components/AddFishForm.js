import React from 'react';

class AddFishForm extends React.Component {

  createFish = (e) => {
    e.preventdefault();
  }

  render(){
    return (
      <form onSubmit={ this.createFish } className="fish-edit">
        <input name="name" type="text" placeholder="name" />
        <input name="price" type="text" placeholder="price" />
        <select name="status">
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="desc"></textarea>
        <input name="image" type="text" placeholder="image" />
        <button type="submit">Add fish</button>
      </form>
    );
  }
}

export default AddFishForm;