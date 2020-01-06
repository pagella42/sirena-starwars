import React, { useState, useEffect } from 'react';
import './landing.css'
import SideBar from './side-Bar/SideBar';
import List from './list/List';
import Detail from './detail/Detail';
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions"

function Landing(props) {
    const [page, setPage] = useState("personajes")

    useEffect( () => {
        props.loadMovie()
            
      }, [])
   
    

    return (
        <div id="landing-container">
            <SideBar setPage={setPage} page={page} />
            <List page={page} data={props.data}/>
            <Detail />
        </div>

    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(Landing)
