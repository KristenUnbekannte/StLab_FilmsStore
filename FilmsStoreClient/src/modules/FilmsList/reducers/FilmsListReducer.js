import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoaded: false,
    error: "",
    films: []
};

const FilmsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILMS_LOADING:
            return {
                ...state,
                isLoaded: false
            };
        case actionTypes.FILMS_LOADED:
            return {
                ...state,
                films: action.films,
                isLoaded: true
            };
        case actionTypes.FILMS_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default FilmsListReducer;