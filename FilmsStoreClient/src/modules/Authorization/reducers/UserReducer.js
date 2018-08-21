import actionTypes from "../actions/actionTypes";
import TokenService from '../../../Services/TokenService';

const initialState = {
    isAuthorized: TokenService.isSetToken(),
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_AUTHORIZED:
            return {
                ...state,
                isAuthorized: true
            };
        case actionTypes.USER_UNAUTHORIZED:
            return {
                ...state,
                isAuthorized: false
            };
        default:
            return state;
    }
};
export default UserReducer;