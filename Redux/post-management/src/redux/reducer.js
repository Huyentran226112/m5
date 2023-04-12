import { FETCH_USER_SUCCESS } from "./action";

const initialState = {
    Title : [],
    Content: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, userlogined: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
  }

  return state;
};

export default rootReducer;