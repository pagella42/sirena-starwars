import React, { useState } from 'react';
import './list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function List (){
 const [page, setPage] = useState("Personajes")

    return (
       <div id="list-container">
          <div id="list-top">
             <div id="top-inner">
                 <span>{page}</span>
             <input id="search" placeholder="Buscar"/>
             </div>
            
          </div>
          <div id="list-results"></div>
       </div>
        
    )
}


export default List;
