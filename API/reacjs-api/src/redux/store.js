/*
1. Cài đặt các thư viện
    npm install redux: cài đặt redux
    npm install react-redux: các hàm để sử dụng với redux
2. Tạo file store.js
    Khai báo action
    KHai báo reducer
    KHai báo store
3. Cung cấp store ở index.js hoặc App.js ( trước BrowserRouter )
    import { Provider } from "react-redux";
    import store from "./redux/store";
4. Sử dụng ở các component
    import { useDispatch, useSelector } from 'react-redux';
    Lấy state:
        Ví dụ: const isLoggedIn = useSelector(state => state.isLoggedIn);
    Gọi action
        dispatch({ type: TEN_ACTION, payload: DU_LIEU });
*/
import { createStore } from "redux";
import { applyMiddleware } from "redux";
// khai bao action
import {SET_USER,SET_CART,SET_IS_LOGGED_IN,SET_USERNAME} from './action';

//2. Khai báo reducer
import rootReducer from './reducer';
//3. Khai báo store
// const store = createStore(rootReducer);
// Tạo middleware myMiddleware
const myMiddleware = (store) => (next) => (action) => {
    if(action.type == SET_USERNAME){
        // action.payload = "huyen";
    }else{
        next(action);
    }
    // console.log("action", action);
};

  // Sử dụng middleware
const store = createStore(rootReducer, applyMiddleware(myMiddleware));
// theo dõi trạng thái
store.subscribe(() => {
    console.log(store.getState())
});

// Export ra để dùng ở các component
export default store;