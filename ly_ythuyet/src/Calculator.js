import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props){
        super(props);
        //  KHAI BAO 
        this. state={
            soA:0,
            soB:0,
            result:0
        }
    }
    // khai bao 4 phuong thuc cong,tru,nhan ,chia
    setSoA = (value) => {
        this.setState( {soA:value} );
    }
    setSoB = (value) => {
        this.setState( {soB:value} );
    }
    cong = () => {
        let soA = parseInt(this.state.soA);
        let soB = parseInt(this.state.soB);
        let kq = soA + soB;
        this.setState( {result:kq} );
    }
    tru = () =>{
       let soA = parseInt(this.state.soA)
       let soB = parseInt(this.state.soB)
       let kq = soA - soB;
        this.setState( {result:kq} );
    }
    nhan = ()=>{
        let soA = parseInt(this.state.soA)
        let soB = parseInt(this.state.soB)
        let kq = soA * soB;
        this.setState( {result:kq} );

    }
    chia = () =>{
        let soA = parseInt(this.state.soA)
        let soB = parseInt(this.state.soB)
        let kq = soA / soB;
        this.setState( {result:kq} );
    }
    render() {
        return (
            <div>
               <h1> {this.state.soA} - {this.state.soB} </h1>
               Số thứ nhất :
               <input type={'text'} 
                        onChange={ (e) => this.setSoA(e.target.value)} 
                    /> <br/>
               Số thứ hai :
                <input type={'text'}
               onChange={ (e) => this.setSoB(e.target.value)}
              /> <br/> 
              <p>Kết quả:{this.state.result}</p>
                <button onClick={this.cong}> + </button>
                <button onClick={this.tru}> - </button>
                <button onClick={this.nhan}> * </button>
                <button onClick={this.chia}> / </button>
            </div>
        );
    }
}

export default Calculator;