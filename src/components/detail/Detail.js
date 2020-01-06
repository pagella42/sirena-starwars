import React  from 'react';
import './detail.css'
import Icon from './Icon';

function Detail (){
 
    return (
       <div id="detail-container">
          <div id="no-data-cont">
              <Icon/>
              <span id="icon-detail">Selecciona un item para ver el detalle aquí!</span>
          </div>
       </div>
        
    )
}


export default Detail;
