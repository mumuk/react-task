import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import onClickOutside from "react-onclickoutside";


export const ImageTagsEditForm = (props) => {
  const dispatch = useDispatch()
  const {items, currentItem} = useSelector(state => state.repos)
  const [tags, setTags] = useState(currentItem.tags.split(', '))
  const [newTags, setNewTags] = useState(tags)

  useEffect(() => {
    props.toggleFormVisible(!props.formVisible)
  }, []);

  ImageTagsEditForm.handleClickOutside = () => {
    props.toggleFormVisible()
  }




  useEffect(() => {

  }, [])


  const handleClickOutside = () => {
    console.log('onClickOutside() method called')
  }


  function handleSubmit(e) {
    e.preventDefault();

    console.log('handle submit - tags: ', currentItem.tags)
  }

  function onTagChange(e) {
     const tag = e.target.value
    console.log(tag)
    setTags([tag])
    console.log('new tags', tags)
  }


  const tagsInputsList = tags.map((tag, index) => {

    return <input
      id={`tag${index}`}
      defaultValue={tag}
      key={tags[index]}
      onChange={onTagChange}
    />
  })


  return (
    <form className={'tag-edit-form'}
          onSubmit={handleSubmit}>
      {tagsInputsList}
      <button>save</button>
    </form>
  )
}


const clickOutsideConfig = {
  handleClickOutside: () => ImageTagsEditForm.handleClickOutside
};


export default onClickOutside(ImageTagsEditForm, clickOutsideConfig)