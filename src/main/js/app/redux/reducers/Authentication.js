import {
  GET_ACCESS_TOKEN
} from './../actions/Authentication'


const defaultState = {
  authenticated: false,
  accessToken: ''
}

const authentication = (state = defaultState, action) => {

  switch (action.type){
    case GET_ACCESS_TOKEN:
      return {
        ...state,
        authenticated: true,
        access_token: action.access_token
      }
    default: return state
  }

};

export default authentication;