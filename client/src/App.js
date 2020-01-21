import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import './App.css';
import Project from './components/project';
import { Route } from 'react-router-dom';
import ProjectList from './components/projectList';

function App(props) {


  return (
    <div className="App">
      <Route/>
      <Route exact path ='/' component={ProjectList}/>
      <Route exact path = "/project/:id" component={Project}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    projectInfo: state.projectInfo,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {}
  )(App);
