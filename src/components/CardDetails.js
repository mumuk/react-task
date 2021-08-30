import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import {dataArray} from "../dataArray"

export const CardDetails = (props) => {
  const [element, setElement] = useState({})


  const {
    id,
    pageURL,
    previewURL,
    webformatURL,
    largeImageURL,
    imageWidth,
    imageHeight,
    imageSize,
    views,
    downloads,
    user,
    user_id,
    userImageURL,
    likes,
    comments,
    tags
  } = element
  useEffect(() => {

    const el = dataArray.find((element => {
      return element.id.toString() === props.match.params.id
    }))


    setElement(el)
    console.log(el)
  })

  return (
    <div className="card-details">
      <div className="card-details__info-container">
        <Link to="/">Go Home</Link>
        <p className="card-details__info-element">Image Id: {id}</p>
        <p className="card-details__info-element">User posted Id: {user_id}</p>
        <p className="card-details__info-element">User: {user}</p>
        <p className="card-details__info-element">Views: {views}</p>
        <p className="card-details__info-element">Downloads: {downloads}</p>
        <p className="card-details__info-element">Likes: {likes}</p>
        <p className="card-details__info-element">Comments: {comments}</p>
        <p className="card-details__info-element">Tags: {tags}</p>
      </div>
      <div className="card-details__image-container">
        <figure>
          <img className="card-details__image" src={`${previewURL}`} alt=""/>
          <figcaption>Preview photo</figcaption>
        </figure>

        <figure>
          <img className="card-details__image" src={`${userImageURL}`} alt=""/>
          <figcaption>User avatar photo</figcaption>
        </figure>

      </div>
    </div>
  )
}



