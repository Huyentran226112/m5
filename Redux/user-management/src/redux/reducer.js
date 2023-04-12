import { GET_USERS, DELETE_USER, SET_USERS, SET_ERROR } from "./action";

// Khởi tạo state ban đầu
const initialState = {
  users: [],
  error: {}
};

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {
  // Handle các actions gửi lên
  switch (action.type) {
    case SET_USERS:
      console.log(3);
        console.log('XL: rootReducer call SET_USERS');
        return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default rootReducer;