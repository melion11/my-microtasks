import React, {ChangeEvent, useState} from "react";


export type InputPropsType = {
    addMessage: (text:string)=>void;
}


export const FullInput = (props: InputPropsType) => {

    let [title,setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('');
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>);
}