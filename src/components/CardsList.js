import React, {useEffect, useState, useMemo} from 'react';
import {FiltersBar} from "./FiltersBar";
import {LoadingPage} from "./LoadingPage"
import {fetchData} from "../actions/reposActions";
import {useDispatch, useSelector} from "react-redux"
import CardListItem from "./CardListItem"


export const CardsList = () => {
  const dispatch = useDispatch()
  const {isFetching, items} = useSelector(state => state.repos)
  const {text, sortBy} = useSelector(state => state.filters)
  const [arrItems, setArrItems] = useState(items)

useMemo(() => {
  items.length === 0 && dispatch(fetchData())
}, [items]);

  useEffect(() => {
    setArrItems(filteredItems)
  }, [text, sortBy, items])


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


  return (
    isFetching ? <LoadingPage/> : <div className="cards-list-page">
      <FiltersBar/>
      <div className="cards-list-page__list">
        {arrItems.map((el) => {
            return <CardListItem
              key={el.id}
              element={el}/>
          }
        )}
      </div>
    </div>
  )
}
