import React, {useState} from 'react';
import {Cars, carType} from './microtasks/map/topCars';
import {Button} from './microtasks/button/Button';

function App() {
    const topCars: carType[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    // const ButtonFoo1 = (name:string) => {
    //     console.log(name)
    // }
     // const ButtonFoo2 = (name:string) => {
    //     console.log(name)
    // }
     // const ButtonFoo3 = () => {
    //     console.log('im stupid button')
    // }

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
    }

    const onClickReboot = () => {
        setA(0)
    }

    return (
        <div className="App">
            <Cars cars={topCars}/>
            {/*<Button name={'MyYouTubeChanel-1'} callBack={()=>ButtonFoo1('ivan')}/>*/}
            {/*<Button name={'MyYouTubeChanel-2'} callBack={()=>ButtonFoo2('vasya')}/>*/}
            {/*<Button name={'+'} callBack={ButtonFoo3}/>*/}
            <h1 onClick={onClickHandler}>{a}</h1>
            <button onClick={onClickReboot}>reboot</button>
        </div>
    )
}


