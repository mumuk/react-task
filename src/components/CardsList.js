import React, {useEffect, useState} from 'react';
import {CardListItem} from "./CardListItem"
import {FiltersBar} from "./FiltersBar";
import {dataArray} from "../dataArray"

const axios = require('axios')

const API_KEY = '22812851-e72d4d1e56b860749e3829011';
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=cats&image_type=all&per_page=100`;

const sendGetRequest = async (url) => {
  try {
    const resp = await axios.get(url);

  } catch (err) {
    console.error(err);
  }
}


export const CardsList = () => {
  const [data, dataSet] = useState(null)

  useEffect(() => {

  })


  return (<div className="cards-list-page">
      <div>
        <FiltersBar/>
      </div>
      <div className="cards-list-page__list">
         {dataArray.map((el) => {

          return <CardListItem
            key={el.id}
            element={el}
          />
        })}
      </div>
    </div>


  )
}