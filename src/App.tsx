import React, {ChangeEvent, useState} from 'react';
import {FullInput} from "./microtasks/input/FullInput";
import {Input} from "./microtasks/input/Input";
import {Button} from "./microtasks/input/Button";



function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title,setTitle] = useState('');

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('');
    }

    const addMessage = (title:string) => {
       let newTitle = {message: title};
       setMessage([newTitle, ...message], )

    }



    return (
        <div className="App">

            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={onClickButtonHandler} />


            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
