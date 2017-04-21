import {
  SET_PRODUCTS
} from '../actions'


const defaultState = {
  products: []
}

const product = (state = defaultState, action) => {

  switch (action.type){
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    default: return state
  }

};

export default product;