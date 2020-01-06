

import axios from 'axios'


import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import './index.css';
import Landing from './components/Landing';


let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component{

  render(){
      return(
         <Landing/>
      )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
