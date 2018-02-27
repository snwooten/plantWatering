import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { SinglePlant } from './SinglePlant.jsx';
import { fetchPlants } from '../reducers/plants';

class Plants extends Component {


  componentDidMount() {
    this.props.fetchPlants();
  }

  render() {
    return (
      <div className="wrapper">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Last Watered</th>
              <th scope="col">Amount Watered(fl oz)</th>
            </tr>
          </thead>
          <tbody>
              {
                this.props.plants.map(plant => {
                  return (
                  <tr key={plant.id}>
                    <th scope="row">{plant.id}</th>
                      <td>
                        <Link to={`/plants/${plant.id}`}>
                          {plant.name}
                        </Link>
                      </td>
                      <td>{plant.type}</td>
                      <td>{plant.lastWatered}</td>
                      <td>{plant.amountWatered}</td>
                  </tr>
                    )
                  })
              }
          </tbody>
        </table>
      </div>
    )
  }

}
const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlants: () => dispatch(fetchPlants())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Plants)
