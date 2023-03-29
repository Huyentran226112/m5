import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './Footer';
import Header from './Header';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
const h1 = (<h1>
  hello anh em 2
  </h1>
  );

  root.render(
    <div className="red">
      <div className="blue" />
    </div>
  );
const elm2 =(
<div children={<div className="white" />} className="black" />
);
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
const id ='tieude';
const h2 =(
  <h2 style={mystyle}id={id}>xin chao </h2>

)
// const App = () => {
  
// };

const books = ['van','su','dia'];
 
// root.render(
//   <>
//     <Header/>
//     <App/>
//     <Footer/>
//   </>
// );

root.render(
  <ul>
    {
      books.map((book)=>(
        <li>{book}</li>
      ))
    }
  </ul>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
