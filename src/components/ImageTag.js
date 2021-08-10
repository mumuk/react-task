import React from 'react';

export const ImageTag =(props)=>{
const  {text} = props
  console.log(text)
  return(
      <div className="card-list-item__info-container">
        <p className="card-list-item__info-container__info-element">{text}</p>

      </div>
  )
}