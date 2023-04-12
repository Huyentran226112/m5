import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";


function Login(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SET_USER = "SET_USER";
    const SET_CART = "SET_CART";
    const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
    const SET_USERNAME='SET_USERNAME';
    const username = useSelector(state => state.username)

    const handleSubmit = () => {
        //Gọi action

        //SET_USER
        const user = {
            name: 'NVA',
            age: 18
        }
        dispatch({ type: SET_USER, payload: user });

        // SET_IS_LOGGED_IN
        dispatch({ type: SET_IS_LOGGED_IN, payload: 1 });

        // SET_CART
        dispatch({ type: SET_CART, payload: {} });

        // SET_USERNAME
        dispatch(
            {
                type:SET_USERNAME,
                payload:"no"

            }
        );
        navigate('/')
    }

    return (
        <div>
            <h1>Login -{username}</h1>
            <button onClick={ handleSubmit } >Login</button>
        </div>
    );
}

export default Login;