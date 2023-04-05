import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import StateClass from './StateClass';
import StateFun from './StateFun';
import Count from './Count';
import Calculator from './Calculator';
// import Todo from './Todo';
import TodoFun from './TodoFun';
import Student from './Student';
import Book from './Book';
// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <>
   <Student />
   {/* <Book /> */}
   {/* <TodoFun /> */}
  {/* <Calculator/> */}
{/* <Count/>
<StateClass/>
<StateFun/>  */}
  </>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();