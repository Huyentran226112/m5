import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const hello = React.createElement(
  'h1',
  {
    id: 'tieude',
    className: 'title',
  },
  'Xin chao anh em'
); 


function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

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

const h1 = ( <h1>
              Hello anh em 2
            </h1>
);

const div = (
  <div className="red">
    <div className="blue"></div>
  </div>
)


const elm2 = (
  <div children={<div className="white" />} className="black" />
);

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

const id = 'tieude';

const h2 = (
  <h2 style={mystyle} id={id}> Xin chao h2 </h2>
);

// const App = () => {

// }


// root.render( 
//   <>
//     <Header/> 
//     <App/> 
//     <Footer/>
//   </>
// );

const name = "Your name";
// const elm3 = React.createElement("h1", { style: { textAlign: "center" } }, name);

const books = ['Van','Su','Dia'];

// function Car( props ) {
//   console.log(props);
//   return (
//     <>
//       Xe { props.name } <br/>
//       Mau { props.color } <br/>
//       Ban { props.ver } <br/>
//     </>
//   );
// }

function Garage(){
  return (
    <h1> Garage </h1>
  )
}

class Car extends React.Component {
  render() {
    return (
      <>
        <Garage/>
        Xe { this.props.name } <br/>
        Mau { this.props.color } <br/>
        Ban { this.props.ver } <br/>
      </>
    )
  }
}
root.render( <Car name="Vios" color="kem" ver="G" /> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();