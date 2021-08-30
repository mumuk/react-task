import React, {useState} from 'react';
import {ImageTag} from "./ImageTag";
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {getCurrent} from "../actions/reposActions";
import ImageTagsEditForm from "./ImageTagsEditForm";


export const CardListItem = (props) => {
  const [formVisible, setFormVisible] = useState(false)
  const dispatch = useDispatch()
  let {comments, likes, previewURL, tags, id} = props.element
  tags = tags.split(',')

  const editTagsHandler = (e) => {
    toggleFormVisible(true)
    dispatch(getCurrent(props.element))
  }

const toggleFormVisible = (visible)=>setFormVisible(visible)


  //TODO что нужно чтобы именить стор?
  //TODO Как аменить тег?
  //TODO теги записываются в редакс?


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
      {formVisible && <ImageTagsEditForm toggleFormVisible = {toggleFormVisible}/>}
    </div>

  )
}

