import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
const phone = 123456;

function App(){
  return(
    <>
     <Header name="Codegym" phone={phone} />
      <h1>nội dung</h1>
      <Footer/>
        </>
     
     )
    }
    //   class Car extends React.Component {
      //     render() {
        //       return (
          //        <>
          //        <Garage/>
          //       xe {this.props.name}<br/>
          //       mau{this.props.color}<br/>
          //       ban {this.props.ver}<br/>
          //       </>
          
          //       )  
          //     }
          //   }
          root.render(<App/>);
          const root = ReactDOM.createRoot(document.getElementById('root'));

reportWebVitals();