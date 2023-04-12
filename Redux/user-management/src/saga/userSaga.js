import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { GET_USERS, SET_USERS,DELETE_USER } from '../redux/action';
const BaseURL = "https://642f6d7eb289b1dec4b2c047.mockapi.io/api/users";
function* getUsers(action) {
    console.log('Saga: getUsers');
    try {
        const response = yield axios.get(BaseURL);
        console.log('XL: rootSaga Dispatch SET_USERS');
        yield put({ type: SET_USERS, payload: response.data });
        console.log(2);
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}
function* deleteUser(action) {
    console.log(action);
    let id = action.payload.id;
    console.log('Saga: deleteUser');
    try {
        const response = yield axios.delete(BaseURL+'/'+id);
        console.log('XL: rootSaga Dispatch SET_USERS');
        yield put({ type: GET_USERS, payload: response.data });
        alert ('đã xóa thành công ');
        console.log(2);
    } catch (error) {
        console.log("error - getUser : ", error);
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_USERS, getUsers);
    yield takeLatest(DELETE_USER, deleteUser);
}