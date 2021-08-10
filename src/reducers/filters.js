const filtersReducerDefaultState = {
  text:"",
  sortBy: 'comments',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TAGS_FILTER':
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_COMMENTS":
      return {
        ...state,
        sortBy: 'comments',
      };
    case "SORT_BY_LIKES":
      return {
        ...state,
        sortBy: 'likes',
      };
    default:
      return state
  }
};