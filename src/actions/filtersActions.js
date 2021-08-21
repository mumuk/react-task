import {SET_TAGS_FILTER, SORT_BY_COMMENTS, SORT_BY_LIKES} from "../store/types"

export const setTagsFilter = (payload) => ({type: SET_TAGS_FILTER, payload})
export const sortByComments = () => ({type: SORT_BY_COMMENTS})
export const sortByLikes = () => ({type: SORT_BY_LIKES})