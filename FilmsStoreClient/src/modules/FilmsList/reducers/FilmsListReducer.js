import actionTypes from '../actions/actionTypes';

const initialState = {
  isLoaded: false,
  isLoadedAllFilms: false,
  totalCount: null,
  error: '',
  films: [],
  page: 1,
  search: ''
};

const FilmsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILMS_REQUESTED:
      return {
        ...state,
        isLoaded: false,
        error: "",
        page: action.page,
        search: action.search
      };
    case actionTypes.ALL_FILMS_REQUESTED:
      return {
        ...state,
        isLoaded: false,
        error: "",
        page: 1,
        search: action.search
      };
    case actionTypes.FILMS_LOADED:
      const { films, totalCount } = action;
      return {
        ...state,
        films: [...state.films, ...films],
        isLoaded: true,
        isLoadedAllFilms: state.films.length + films.length === totalCount,
        totalCount: totalCount
      };
    case actionTypes.FILMS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoaded: false
      };
    case actionTypes.FILMS_CLEARED:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
export default FilmsListReducer;
