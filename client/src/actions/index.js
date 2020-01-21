import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SINGLE_SUCCESS = 'FETCH_SINGLE_SUCCESS';
export const FETCH_STEP_SUCCESS = 'FETCH_STEP_SUCCESS';

export const fetchProjects = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
        .get('http://localhost:4000/api/projects/')
        .then(res => dispatch({ type: FETCH_PROJECT_SUCCESS, payload: res.data}) & console.log(res.data, "DATA from Fetch Projects" ) & localStorage.setItem)
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}));
};

export const fetchSingleProject = (id) => dispatch => {
    dispatch({ type: START_FETCHING })
    axios
        .get(`http://localhost:4000/api/projects/${id}`)
        .then(res => dispatch({ type: FETCH_SINGLE_SUCCESS, payload: res.data}) & console.log(res.data, "Single Data Set for Projects" ))
        .then(res => dispatch({ type: FETCH_STEP_SUCCESS, payload: res.data.actions}) & console.log(res.data, "List of Actions" ))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response}));
}