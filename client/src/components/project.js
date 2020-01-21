import React, { useState, useEffect } from 'react';
import { fetchSingleProject } from '../actions';
import { connect } from 'react-redux';


const Project = (props) => {
    const [project, setProject] = useState([]);
    const [steps, setSteps] = useState([]);
    
    useEffect(() => {
        const id = props.match.params.id;
        props.fetchSingleProject(id)
        setProject(props.projectInfo)
        setSteps(props.actions)
    }, [props.projectInfo.id])
    console.log(props.projectInfo.actions.length)
    const { name, description, completed } = project;
    return(
        <>
            <div>
                <h1>Name: {name}</h1>
                <h2>Description: {description}</h2>
                {!completed ?  <h3>Still Working...</h3> : <h3>Completed Project</h3>}
                
            </div>
            <div>
                {/* {props.steps.map(e => {
                return <div key={e.project_id}> 
                        <h3>Project Steps</h3>
                        <ul>
                            <li>{e.description}</li>
                            <li>{e.notes}</li>
                        </ul>
                    </div>
                })} */}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
      projectInfo: state.projectInfo,
      isFetching: state.isFetching,
      error: state.error,
      actions: state.actions
    };
  };

export default connect(
mapStateToProps,
{fetchSingleProject})
(Project);