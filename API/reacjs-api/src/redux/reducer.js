import {SET_USER,SET_CART,SET_IS_LOGGED_IN,SET_USERNAME} from './action';
const initialState = {
    username :'NVA',
    user: {},
    isLoggedIn: 0,
    cart: {
        items: [],
        total: 0
    }
};
const rootReducer = (state = initialState, action) => {
    // Handle các actions gửi lên

    switch (action.type) {
        case SET_USERNAME:
            return { ...state, username: action.payload };
            break;
        case SET_USER:
            return { ...state, user: action.payload };
            break;
        case SET_CART:
            return { ...state, cart: action.payload };
            break;
        case SET_IS_LOGGED_IN:
            return { ...state, isLoggedIn: action.payload };
            break;
        default:
            return state;
    }
};
export default rootReducer;