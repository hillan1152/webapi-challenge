// A SINGLE PROJECT CARD
// CAN EDIT/DELETE/ADD IT HERE

import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"



function Card ({ project }){
    console.log('Props for card', project)
    
    return(
        <Link to={`/project/${project.id}`}>
            <div>
                <h1>{project.name}</h1>
                <h2>{project.description}</h2>
                {!project.completed ?  <h3>Still Working...</h3> : <h3>Completed Project</h3>}
            </div>
        </Link>
    )

}

const mapStateToProps = state => {
    return {
      users: state.users,
      isFetching: state.isFetching,
      error: state.error
    };
  };


export default connect(
    mapStateToProps,
    {}
    )(Card);
  