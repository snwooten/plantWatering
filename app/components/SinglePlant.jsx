import React from 'react';
import { connect } from 'react-redux';


const SinglePlant = props => {
  console.log('singlePlant props', props);
  return (
    <div>
      <h1>{props.plant.name}</h1>
      <h3>{props.plant.lastWatered}</h3>
      <h3>{props.plant.amountWatered}</h3>
    </div>
  )
}

const mapState = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  return {
    plant: state.plants.find(plant => plant.id === id)
  }
}

export default connect(mapState)(SinglePlant);
