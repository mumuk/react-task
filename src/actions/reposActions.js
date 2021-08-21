import {FETCH_DATA, FETCH_DATA_FAIL, CURRENT_ITEM, SET_TAGS_FILTER} from "../store/types"
import axios from "axios"

const API_KEY = '22812851-e72d4d1e56b860749e3829011';
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=cats&image_type=all&per_page=100`;


export const fetchData = () => async (dispatch) => {

  try {
    const res = await axios.get(URL);
    // console.log(res.data.hits)
    dispatch({
      type: FETCH_DATA,
      payload: res.data.hits
    })

  } catch (err) {
    dispatch({
      type: FETCH_DATA_FAIL,
      payload: console.log(err)
    })
  }
}

export const getCurrent=(payload)=>({type:CURRENT_ITEM,payload})

