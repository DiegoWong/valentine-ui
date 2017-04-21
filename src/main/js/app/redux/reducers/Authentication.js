import {
  SET_ACCESS_TOKEN
} from '../actions'


const defaultState = {
  authenticated: false,
  accessToken: ''
}

const authentication = (state = defaultState, action) => {

  switch (action.type){
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        authenticated: true,
        accessToken: action.accessToken
      }
    default: return state
  }

};

export default authentication;