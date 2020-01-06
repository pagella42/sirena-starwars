import React from 'react';
import './side-bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

function SideBar(props) {


    return (

        <div id="side-bar">
            {props.page === "peliculas" ?
                <div id="side-inner">
                    <div className="icon-cont icon-cont-up" onClick={() => props.setPage("personajes")}>
                        <FontAwesomeIcon class="icon" icon={faMale} />
                    </div>
                    <div className="icon-cont icon-clicked" onClick={() => props.setPage("peliculas")}>
                        <FontAwesomeIcon class="icon" icon={faVideo} />
                    </div>
                </div>
                :
                <div id="side-inner">
                    <div className="icon-cont icon-clicked" onClick={() => props.setPage("personajes")}>
                        <FontAwesomeIcon class="icon" icon={faMale} />
                    </div>
                    <div className="icon-cont icon-cont-down" onClick={() => props.setPage("peliculas")}>
                        <FontAwesomeIcon class="icon" icon={faVideo} />
                    </div>
                </div>
            }



        </div>


    )
}


export default SideBar;
