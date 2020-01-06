import React, { useState } from 'react';
import './top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Top(props) {

   

    return (

        <div id="list-top">
            <div id="top-inner">

                {props.search ?
                    <div  className="title-cont">
                        <button onClick={()=>{props.setSearch("")}} id="search-butt">Borrar</button>
                    </div> :
                    <div id="search-butt-cont"> 
                      <span className="header-title">{props.page[0].toUpperCase() + props.page.slice(1)}</span>  
                    </div>
                    }

                <div className="search-cont">
                    <input id="search" placeholder="Buscar"  value={props.search} onChange={props.searchChange}/>
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                </div>
            </div>
        </div>

    )
}


export default Top;
