import React, { useState } from 'react';

const carList = ['BMW', 'Mercedes S600', 'Audi'];
const colorList = ['Red', 'Green', 'Blue'];

function App() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  function handleCarChange(event) {
   setSelectedCar(previousState=>{
    return{...previousState,car:event.target.value};
   });
  }
  function handleColorChange(event){
    setSelectedCar(previousState=>{
      return {...previousState,color:event.target.value};
    });
  }

  return (
    <div>
      <div>
        <h1>Select your car</h1>
        <label htmlFor="car-select">Select a  car: </label>
        <select
          id="car-select"
          value={selectedCar.car}
          onChange={handleCarChange}
        >
          {carList.map(car => (
            <option key={car} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="color-select">Select a color: </label>
        <select
          id="color-select"
          value={selectedCar.color}
          onChange={handleColorChange}
        >
          {colorList.map(color => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <h1>
        You selected a  {selectedCar.color} - {selectedCar.car}
      </h1>
    </div>
  );
}

export default App;

