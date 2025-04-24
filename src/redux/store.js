import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

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

const rootReducer = combineReducers({
    user: userReducer,
});

const store = createStore(rootReducer);

export default store;
