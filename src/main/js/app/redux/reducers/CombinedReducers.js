import { combineReducers } from 'redux'
import Authentication from './Authentication'
import Product from './Product'

const combinedReducers = combineReducers({Authentication, Product});

export default combinedReducers;