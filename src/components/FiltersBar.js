import React, {useState} from 'react';
import Select from 'react-select'
import {useDispatch, useSelector} from "react-redux"
import {setTagsFilter, sortByComments, sortByLikes} from "../actions/filtersActions";
import {DebounceInput} from 'react-debounce-input';

export const FiltersBar = () => {
  const dispatch = useDispatch()
  const {isFetching, items} = useSelector(state => state.repos)
  const {text, sortBy} = useSelector(state => state.filters)
  const [inputText, setInputText] = useState(text)
  const [arrItems, setArrItems] = useState(items)



  const options = [
    {value: {sortBy: 'comments'}, label: 'by comments'},
    {value: {sortBy: 'likes'}, label: 'by likes'},
  ];


  const onTextChange = (e) => {


    setInputText(e.target.value)
    console.log(inputText[inputText.length - 1])
    console.log(inputText[inputText.length - 1]!== e.target.value)
    inputText[inputText.length - 1] !== e.target.value && dispatch(setTagsFilter(inputText));
  };

  const onSortChange = ({value}) => {
    value.sortBy === 'comments' ?
      dispatch(sortByComments())
      :
      dispatch(sortByLikes())
  };


  return (
    <div className="filters-bar">
      <DebounceInput
        type="text"
        placeholder="search by tags"
        className="filters-bar__item"
        value={inputText}
        debounceTimeout={300}
        onChange={onTextChange}
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