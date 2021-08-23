import React, {useState} from 'react';
import Select from 'react-select'
import {useDispatch, useSelector} from "react-redux"
import {setTagsFilter, sortByComments, sortByLikes} from "../actions/filtersActions";
import debounce from 'lodash.debounce';

export const FiltersBar = () => {
  const dispatch = useDispatch()
  const {isFetching, items} = useSelector(state => state.repos)
  const {text, sortBy} = useSelector(state => state.filters)
  const [inputText, setInputText] = useState(text)


  const options = [
    {value: {sortBy: 'comments'}, label: 'by comments'},
    {value: {sortBy: 'likes'}, label: 'by likes'},
  ];


  const filterInput = () => dispatch(setTagsFilter(inputText))
  const debouncedFilterInput = debounce(filterInput, 300);


  const onTextChange = (e) => {
    debouncedFilterInput()
  };


  const onSortChange = ({value}) => {
    value.sortBy === 'comments' ?
      dispatch(sortByComments())
      :
      dispatch(sortByLikes())
  };


  return (
    <div className="filters-bar">
      <input
         type="text"
        placeholder="search by tags"
        className="filters-bar__item"
        value={inputText}
        // onChange={onTextChange}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyUp={onTextChange}
      />
      <Select className="filters-bar__item"
              value={sortBy}
              onChange={onSortChange}
              options={options}
              placeholder={`Sort by ${sortBy}`}
      />

    </div>

  )
}