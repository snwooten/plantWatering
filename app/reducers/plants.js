import axios from 'axios';

const SET_PLANTS = 'SET_PLANTS';
const ADD_PLANT = 'ADD_PLANTS';

const setPlants = plants => ({type: SET_PLANTS, plants})
const addPlant = plant => ({type: ADD_PLANT, plant })

export const fetchPlants = () => {
  return dispatch => {
    axios.get('/api/plants')
      .then(res => res.data)
      .then(plants => dispatch(setPlants(plants)))
      .catch(err => console.error('Something went wrong with fetching the plants!', err))
  }
}

export const newPlant = (plant) => {
  return dispatch => {
    axios.post('/api/plants', plant)
    .then(res => dispatch(addPlant(res.data)))
    .catch(err => console.error(`Unable to add plant: ${plant}`, err));
  }
}

export default (plants = [], action) => {
  switch (action.type) {

    case SET_PLANTS:
      return action.plants;

    case ADD_PLANT:
      return [...plants, action.plant]

    default:
      return plants;
  }
}
