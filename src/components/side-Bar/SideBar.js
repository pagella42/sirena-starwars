import React, { useState } from 'react';
import './side-bar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'

function SideBar (){
 
    return (
       
           <div id="side-bar">
               <div id="side-inner">
                   <div class="icon-cont">
                        <FontAwesomeIcon class="icon" icon={faMale} />
                   </div>
                   <div class="icon-cont">
                       <FontAwesomeIcon class="icon" icon={faVideo} />
                   </div>
              
               
               </div>
           </div>
          
        
    )
}


export default SideBar;
