const axios = require('axios')
import {FETCH_DATA, FETCH_DATA_FAIL, GET_CURRENT_ITEM, SET_CURRENT_ITEM} from "../store/types";


const reposDefaultState = {
  items: [],
  currentItem: {},
  isFetching: true,
}

export default (state = reposDefaultState, action) => {
// console.log(action.payload)
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.payload,
        isFetching: false
      }
    case GET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
      }
    case SET_CURRENT_ITEM:
      return {
        ...state,
        items: state.items.filter(item=>{return item.id!==action.payload.id}).concat(action.payload)
      }
    default:
      return state
  }
}


export const startFetchData = () => {
  dispatch(fetchData())
  axios.get(url)
    .then(res => res.data.hits.json()
      .then(data => {
        console.log(data)
        return dispatch({type: FETCH_DATA_SUCCESS, payload: data})
      })
      .catch(e => dispatch({type: FETCH_DATA_FAIL, payload: e})))
}