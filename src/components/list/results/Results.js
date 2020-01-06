import React  from 'react';
import './results.css'

function Results(props) {

   return (
      
         <div id="list-results">
   {props.list.map(l=> <div key={l} className="list-item"><div className="result-inner"><span className="result-name">{l}</span></div></div>)}
         </div>

   )
}


export default Results;
