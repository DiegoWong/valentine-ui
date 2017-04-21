import { SET_ACCESS_TOKEN, SET_PRODUCTS } from './actions'

export function setAccessToken(accessToken) {
  sessionStorage.setItem('accessToken', accessToken)
  return {type: SET_ACCESS_TOKEN, accessToken}
}

export function setProducts(products) {
  return {type: SET_PRODUCTS, products}
}


export const getAccessToken = () => {
  return (dispatch) =>  {
    fetch('/user', {
      credentials: "same-origin"
    })
      .then( processUserResponse )
      .then((json) => dispatch(setAccessToken(json.details.tokenValue)))
      .catch(() => console.info('Unauthenticated'))
  }
}

export const getProducts = () => {
  const accessToken = sessionStorage.getItem('accessToken')
  return (dispatch) =>  {
    fetch(`http://${API_HOST}:${API_PORT}/products`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then( (response) => {
        return response.json()
      }  )
      .then((json) => {
        console.log(json);
        return dispatch(setProducts(json._embedded.products))
      })
      .catch(() => console.info('Error collecting products'))
  }
}

const processUserResponse = (response) => {
  if(!response.redirected) {
    return response.json()
  } else {
    return new Promise((resolve, reject) => reject())
  }
}