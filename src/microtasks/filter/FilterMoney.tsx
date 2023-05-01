import React from 'react';
import {Button} from '../button/Button';
import {FilterType} from '../../App';




type currentMoneyType = {
    banknots: string
    value: number
    number: string
}


type NewComponentType = {
    currentMoney: currentMoneyType[];
    onClickFilterHandler: (value:FilterType)=>void

}


function NewComponent(props: NewComponentType) {

    return (
        <div className={'money-wrap'}>
            <ul className="money-list">
                {props.currentMoney.map((m, index) => {
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
                <Button name={'Dollar'} callBack={() => props.onClickFilterHandler('Dollar')}/>
                <Button name={'Rubls'} callBack={() => props.onClickFilterHandler('Rubls')}/>
                <Button name={'All'} callBack={() => props.onClickFilterHandler('All')}/></div>
        </div>
    )
}

export default NewComponent;


