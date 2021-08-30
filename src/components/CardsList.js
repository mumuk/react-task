import React, {useEffect, useState} from 'react';
import {FiltersBar} from "./FiltersBar";
import {LoadingPage} from "./LoadingPage"
// import {useSelector, useDispatch} from "react-redux";
import {fetchData} from "../actions/reposActions";
import {useDispatch, useSelector} from "react-redux"
import {CardListItem} from "./CardListItem"


export const CardsList = () => {
  const dispatch = useDispatch()
  const {isFetching, items} = useSelector(state => state.repos)
  const {text, sortBy} = useSelector(state => state.filters)
  const [inputText, setInputText] = useState(text)
  const [arrItems, setArrItems] = useState(items)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const filteredItems = items.filter((item) =>
    item.tags.toLowerCase().includes(text.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'comments') {
      if (a.comments > b.comments) {
        return -1
      }
    }
    if (sortBy === 'likes') {
      if (a.likes > b.likes) {
        return -1
      }
    }
  })


  useEffect(() => {

    setArrItems(filteredItems)

  }, [text, sortBy, items])


  return (
    isFetching ? <LoadingPage/> :
      <div className="cards-list-page">

        <FiltersBar/>

        <div className="cards-list-page__list">
          {arrItems.map((el) => <CardListItem
            key={el.id}
            element={el}/>
          )}
        </div>
      </div>
  )
}