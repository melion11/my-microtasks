import React from 'react';
import {Cars, carType} from './map/topCars';

function App() {
    const topCars: carType[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    // function myFirstSubscriber () {
    //     console.log('Hello, i am Vasya')
    // }
    //
    // function mySecondSubscriber () {
    //     console.log('Hello, i am Ivan')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (num:number) => {
       console.log(`в эту функцию пришло число ${num}`)
    }

    return (
        <div className="App">
            <Cars cars={topCars}/>
            {/*<button onClick={(e)=> onClickHandler('Ivan')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(e)=> onClickHandler('Vasya')}>MyYouTubeChanel-2</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={()=> foo2(100200)}>2</button>
        </div>
    )
}

export default App;
