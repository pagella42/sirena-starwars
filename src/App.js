import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/Landing';


function App (){
 
    return (
        <Router>
          <Route  path="/" render={() => <Landing/>} />
        </Router>
        
    )
}


export default App;
