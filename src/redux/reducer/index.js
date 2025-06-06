import handleCart from './handleCart'
import { combineReducers } from "redux";

const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

/* const rootReducer = combineReducers({
    
}); */

const rootReducers = combineReducers({
    user: userReducer,
    handleCart,
})
export default rootReducers