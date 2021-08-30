import React from 'react';

export const ImageTag =(props)=>{
const  {text} = props
  return(
      <div className="card-list-item__info-container card-list-item__image-tag"
      >
        <p className="card-list-item__info-container__info-element">{text}</p>

      </div>
  )
}