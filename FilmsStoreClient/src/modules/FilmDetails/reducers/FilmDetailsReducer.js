import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoaded: false,
    error: "",
    film: {}
};

const FilmDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FILM_DETAILS_LOADING:
            return {
                ...state,
                isLoaded: false
            };
        case actionTypes.FILM_DETAILS_LOADED:
            return {
                ...state,
                film: action.film,
                isLoaded: true
            };
        case actionTypes.FILM_DETAILS_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default FilmDetailsReducer;