import React, {useState}from 'react';
import Select from 'react-select'

export const FiltersBar =()=>{
  const [sortListValue, serSortListValue] = useState('sortByTags')
  const options = [
    { value: 'sortByTags', label: 'by tags' },
    { value: 'sortByComments', label: 'by comments' },
    { value: 'sortByLikes', label: 'by likes' },
  ];

  const handleChange = sortListValue => {

  }

  return(
    <div className="filters-bar" >
      <input type="text" placeholder="search by tags" className="filters-bar__item"/>

      <Select className="filters-bar__item"
        value={sortListValue}
        onChange={handleChange()}
        options={options}
              placeholder='Sort by tags'
      />

    </div>

  )
}