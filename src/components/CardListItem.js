import React, {useEffect, useState, useMemo} from 'react';
import {ImageTag} from "./ImageTag";
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getCurrent} from "../actions/reposActions";
import ImageTagsEditForm from "./ImageTagsEditForm";


export const CardListItem = (props) => {
  console.log('CardList item')
  const [formVisible, setFormVisible] = useState(false)
  const dispatch = useDispatch()
  let {comments, likes, previewURL, tags, id} = props.element
  tags = tags.split(',')
  const {currentItem} = useSelector(state => state.repos)

  const editTagsHandler = () => {
    toggleFormVisible(true)
      dispatch(getCurrent(props.element))
  }
//
// useEffect(()=>{},[])
// useEffect(()=>{},[])

  const toggleFormVisible = (visible) => setFormVisible(visible)


  function handleClick() {
    dispatch(getCurrent(props.element))
  }

  return (

    <div className="card-list-item">
      <Link
        to={`/cat/${id}`}
        className="card-list-item__image-container"
        onClick={handleClick}
      >
        <img
          className={"card-list-item__image"}
          src={`${previewURL}`}
          alt={`cat ${id}`}/>
      </Link>
      <div className="card-list-item__info-container">
        <p className="card-list-item__info-container__info-element">Likes: {likes}</p>
        <p className="card-list-item__info-container__info-element">Comments: {comments}</p>
      </div>
      <div className="card-list-item__tags-container"
           onDoubleClick={editTagsHandler}
      >
        {tags.map((tag, index) => {

          return <ImageTag
            key={index}
            text={tag}
          />
        })}

      </div>
      {formVisible && <ImageTagsEditForm toggleFormVisible={toggleFormVisible}/>}
    </div>

  )
}

export default React.memo(CardListItem)