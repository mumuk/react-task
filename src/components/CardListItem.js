import React from 'react';
import {ImageTag} from "./ImageTag";
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {getCurrent} from "../actions/reposActions";
const axios = require('axios')



export const CardListItem = (props) => {
  const dispatch = useDispatch()
  let {comments, likes, previewURL, tags,id} = props.element
   tags = tags.split(',')


  function handleClick() {
 dispatch(getCurrent(props.element))
  }

  return (

    <div className="card-list-item">
      <Link
        to={`/cat/${id}`}
        className="card-list-item__image-container"
             style={{
               backgroundImage: `url(${previewURL})`,
             }}
        onClick={handleClick}
      >
      </Link>
      <div className="card-list-item__info-container">
        <p className="card-list-item__info-container__info-element">Likes: {likes}</p>
        <p className="card-list-item__info-container__info-element">Comments: {comments}</p>
      </div>
      <div className="card-list-item__tags-container">
        {tags.map((tag, index) => {

          return <ImageTag
            key={index}
            text={tag}
          />
        })}

      </div>

    </div>

  )
}

