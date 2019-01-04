import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault();
    const location = this.myInput.current.value;
    this.props.history.push(`/store/${location}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={ this.goToStore }>
        <h2>Please enter a Store</h2>
        <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={ getFunName() } />
        <button type="Submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;