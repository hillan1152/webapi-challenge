import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import Card from './card';


function ProjectList(props) {

  useEffect(() => {
    props.fetchProjects()

  }, []);


  return (
    <div className="App">
      {console.log(props.users, "This is users")}
      {props.isFetching ? <h1>Loading...</h1> : ''}
      <div>
      {props.users.map(e => {
        return <Card
                  key={e.id}
                  project={e}/>
      })}
      </div>
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
  {fetchProjects}
  )(ProjectList);
