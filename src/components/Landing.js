import React, { useState } from 'react';
import './landing.css'
import SideBar from './side-Bar/SideBar';
import List from './list/List';
import Detail from './detail/Detail';

function Landing (){
 
    return (
       <div id="landing-container">
           <SideBar/>
           <List/>
            <Detail/>
       </div>
        
    )
}


export default Landing;
