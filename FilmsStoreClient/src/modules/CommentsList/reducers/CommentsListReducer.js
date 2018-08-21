import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoaded: false,
    error: "",
    comments: []
};

const CommentsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COMMENTS_LOADING:
            return {
                ...state,
                isLoaded: false
            };
        case actionTypes.COMMENTS_LOADED:
            return {
                ...state,
                comments: action.comments,
                isLoaded: true
            };
        case actionTypes.COMMENTS_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default CommentsListReducer;