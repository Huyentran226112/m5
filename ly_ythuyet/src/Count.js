import React, { Component } from 'react';

class Count extends Component {
    constructor(props){
        super(props);
        // khai bao state count
        this.state ={
            count:0
        }
    }
    setCount = ()=>{
        this.setState(prevState =>({
            count:prevState.count +1
        }) );
    }
    render() {
        return (
            <div>
        <h1>chuong trinh bien dem</h1>
            <h1>hien thi so lan click : {this.state.count}</h1>
            <button onClick={this.setCount}>tang len</button>
            </div>
        );
    }
}

export default Count