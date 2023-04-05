// rcc
import React, { Component } from 'react';

class StateClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            brand:'vinfas',
            model:'vf9',
            color:'white',
            year:2023,
            age:17
        }

        // this.setColor = this.setColor.bind(this);
    }
// viet kieu phuong thức
    setAge = () =>{
         this.setState({age:18}); 
    }
    setColor = () => {
        //this.setState({color:'red'});
        this.setState(prevState =>({
            color:(prevState.color=='white') ? 'red' : 'yellow'
        }) );
    }
    hello = (name) =>{
        alert ('xin chao ban '+ name);
    }

    render() {
        if(this.state.age >= 18){
            return (
                 <h1>ban duoc uong riu</h1>
            )
            }else{
                return (
                    <div>
                    <h1>thuong hieu:{this.state.brand}</h1>  
                    <h1>kieu:{this.state.model}</h1>  
                    <h1>mau sac:{this.state.color}</h1>  
                    <h1>nam:{this.state.year}</h1>  
                    <button  onClick={this.setColor}> doi mau</button>
                    <button  onClick={this.setAge}> doi tuoi </button>
                    <button  onClick={() => this.hello('huyen')}> hello</button>
                    </div>
                    );
                 }
             }
        }

export default StateClass;