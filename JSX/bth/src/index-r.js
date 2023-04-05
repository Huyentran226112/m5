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
//     <A React.Component {
  // function Car(props) {
  //   console.log(props)
  //   return (
  //     <>
  //     xe {props.name}<br/>
  //     mau{props.color}<br/>
  //     ban {props.ver}<br/>
  //     </>
  //   )
  // }
  function Garage(){
    return(
      <h1>Garage</h1>
    )
  }
class Car extends React.Component {
  render() {
    return (
     <>
     <Garage/>
    xe {this.props.name}<br/>
    mau{this.props.color}<br/>
    ban {this.props.ver}<br/>
    </>

    )  
  }
}
// root.render(
//   // <ul>
//   //   {
//   //     books.map((book)=>(
//   //       <li>{book}</li>
//   //     ))
//   //   }
//   // </ul>
// );
root.render(<Car name="viso" color="kem" ver="G"/>);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
