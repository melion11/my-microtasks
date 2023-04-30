import React from 'react';
import {Cars, carType} from './map/topCars';

function App() {

    const topCars: carType[] = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

  return (
    <div className="App">
      <Cars cars={topCars}/>
    </div>
  );
}

export default App;
