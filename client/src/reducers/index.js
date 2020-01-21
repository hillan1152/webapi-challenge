
const initialState = {
    users: [],
    isFetching: false,
    error: "", 
    projectInfo: {},
    actions: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'START_FETCHING':
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case 'FETCH_PROJECT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: "",
                users: action.payload
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case 'FETCH_SINGLE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: "",
                projectInfo: action.payload
            }
        case 'FETCH_STEP_SUCCESS':
            return {
                ...state,
                isFetching: false,
                error: "",
                actions: action.payload
            }
        default: 
            return state;
    }
}

export default reducer;