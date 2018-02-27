import { combineReducers } from 'redux';
import plantsReducer from './plants';

const rootReducer = combineReducers({
  plants: plantsReducer
})

export default rootReducer
