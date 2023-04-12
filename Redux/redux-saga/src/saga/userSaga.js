import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS
} from "../redux/action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";
function* getUser(action) {
    try {
      const response = yield axios.get(BaseURL);
      // Sau khi lấy được dữ liệu từ fake API
      // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
      yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("error - getUser : ", error);
    }
  }
  function* authSagaFun(action) {
    console.log('XL: rootSaga take LOGIN -> call authSagaFun');
    const user = action.payload;
    if (user.username === "admin" && user.password === "letmein") {
     console.log('XL: rootSaga Dispatch LOGIN_SUCCESS');
      yield put({ type: LOGIN_SUCCESS, payload: user });
      console.log('XL: rootSaga Dispatch FETCH_USER');
      yield put({ type: FETCH_USER, payload: {} });
    }
  }
  export default function* rootSaga() {
    //  action login ->authSagaFun()
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
  }
