import React, { useState, useEffect } from 'react';
import './list.css'
import Top from './top/Top';
import Results from './results/Results';

function List(props) {

   const [search, setSearch] = useState("")
   const [list, setList] = useState([])

   let searchChange = (event) => {
      setSearch(event.target.value)
   }






   useEffect(() => {
      if (props.data && props.page === "peliculas") {
         let newList = []
         props.data.films.data.forEach(d => d.title.includes(search)? newList.push(d.title): null)
         setList(newList)
      }
      else if (props.data && props.page === "personajes") {
         let newList = []
         props.data.people.data.forEach(d =>d.name.includes(search)?  newList.push(d.name): null)
         setList(newList)
      }
   }, [props.data, props.page, search])


   return (
      <div id="list-container">
         <Top page={props.page} search={search} setSearch={setSearch} searchChange={searchChange} />

         <Results list={list} />
      </div>

   )
}


export default List;
