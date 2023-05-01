import React, {useState} from 'react';
import {Button} from './microtasks/button/Button';

type FilterType = 'All' | 'Dollar' | 'Rubls'


function App() {

    let [money, setMoney] = useState ([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]);

   const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money;

    if (filter === 'Dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'Rubls') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
    }

    return (
        <div className={'money-wrap'}>
            <ul className="money-list">
                {currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknots} </span>
                            <span>{m.value} </span>
                            <span>{m.number} </span>
                        </li>
                    );
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'Dollar'} callBack={() => onClickFilterHandler('Dollar')}/>
                <Button name={'Rubls'} callBack={() => onClickFilterHandler('Rubls')}/>
                <Button name={'All'} callBack={() => onClickFilterHandler('All')}/></div>
        </div>
    )
}

export default App;
