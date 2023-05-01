import React from 'react';

type ButtonPropsType = {
    name: string;
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const OnClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={OnClickHandler}>{props.name}</button>
    )
}

