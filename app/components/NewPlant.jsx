import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPlant } from '../reducers/plants'
import { Link } from 'react-router-dom';

class NewPlant extends Component {
  componentDidMount() {
    this.props.newPlant();
  }
  render() {
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
        <div>
          <ul>
            <li>
              Plant Name:
              <input
                name="name"
                type="text"
                required
                />
            </li>
            <li>
              Plant Type:
              <input
                name="type"
                type="text"
                required
                />
            </li>
            <li>
              Last Time Plant Was Watered:
              <input
                name="lastWatered"
                type="date"
                />
            </li>
            <li>
              Amount Of Water (fl oz):
              <input
                name="amountWatered"
                type="float"
                />
            </li>
          </ul>
          <button type="submit">Add Plant</button>
        </div>
      </form>
      </div>
    )
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    newPlant: () => dispatch(newPlant()),
    onSubmit: (event) => {
      event.preventDefault();
      const addedPlant = {
        name: event.target.name.value,
        type: event.target.type.value,
        lastWatered: event.target.lastWatered.value,
        amountWatered: event.target.amountWatered.value
      }
      dispatch(newPlant(addedPlant))
        event.target.name.value = '';
        event.target.type.value = '';
        event.target.lastWatered.value = '';
        event.target.amountWatered.value = '';
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlant);
