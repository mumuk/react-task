import React from 'react';
import {ImageTag} from "./ImageTag";

const axios = require('axios')

// const API_KEY = '22812851-e72d4d1e56b860749e3829011';
// const URL = `https://pixabay.com/api/?key=${API_KEY}&q=cats&image_type=all&per_page=100`;
//
// const sendGetRequest = async (url) => {
//   try {
//     const resp = await axios.get(url);
//     console.log( resp.data.hits)
//   } catch (err) {
//     console.error(err);
//   }
// }
// sendGetRequest(URL)


export const CardListItem = (props) => {
  let {comments, likes, previewURL, tags} = props.element
  tags = tags.split(',')

  const url = 'https://cdn.pixabay.com/photo/2021/07/22/13/41/cat-6485361_150.jpg'
  return (
    <div className="card-list-item">
      <div className="card-list-item__image-container"
           style={{
             backgroundImage: `url(${previewURL})`,
           }}>

      </div>
      <div className="card-list-item__info-container">
        <p className="card-list-item__info-container__info-element">Likes: {likes}</p>
        <p className="card-list-item__info-container__info-element">Comments: {comments}</p>
      </div>
      <div className="card-list-item__tags-container">
           {tags.map((tag, index)=>{

             return  <ImageTag
               key={index}
               text={tag}
             />
           })}

      </div>

    </div>

  )
}