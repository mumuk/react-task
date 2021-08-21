import {SET_TAGS_FILTER,SORT_BY_COMMENTS,SORT_BY_LIKES} from "../store/types";


const filtersReducerDefaultState = {
  text: "",
  sortBy: 'comments',
};

export default (state = filtersReducerDefaultState, action) => {
  // console.log('action =', action)
  switch (action.type) {
    case SET_TAGS_FILTER:
      return {
        ...state,
        text: action.payload
      };
    case SORT_BY_COMMENTS:
      return {
        ...state,
        sortBy: 'comments',
      };
    case SORT_BY_LIKES:
      return {
        ...state,
        sortBy: 'likes',
      };
    default:
      return state
  }
};

