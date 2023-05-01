import React from 'react';
import {Cars, carType} from './map/topCars';
import {Button} from './button/Button';

function App() {
    const topCars: carType[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const ButtonFoo1 = (name:string) => {
        console.log(name)
    }

    const ButtonFoo2 = (name:string) => {
        console.log(name)
    }

    const ButtonFoo3 = () => {
        console.log('im stupid button')
    }

    return (
        <div className="App">
            <Cars cars={topCars}/>
            <Button name={'MyYouTubeChanel-1'} callBack={()=>ButtonFoo1('ivan')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>ButtonFoo2('vasya')}/>
            <Button name={'+'} callBack={ButtonFoo3}/>

        </div>
    )
}

export default App;
