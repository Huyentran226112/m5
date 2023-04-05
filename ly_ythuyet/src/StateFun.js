// rsf

import React, { useState } from 'react';


function StateFun(props) {
    const [color,setColor] = useState ('white'); 
    const [brand,setBrand] = useState ('Vinfas'); 
    const [model,setModel] = useState ('VF9'); 
    const [year,setYear] = useState ('2023'); 
    const doimau = () =>{
            setColor('red');
    }
    const hello =(name)=>{
        alert ('xin chao ' + name)
    }
    return (
        <div>
            <h1> FUNCTION COMPONENT</h1>
            <h1> thuong hieu: {brand}</h1>
            <h1> mau sac:{color}</h1>
            <h1> kieu:{model}</h1>
            <h1> nam :{year}</h1>
            <button onClick={ () => doimau() }> doi mau</button>
            <button onClick={ () => hello('huyen') }> hello</button>
        </div>
    );
}

export default StateFun;