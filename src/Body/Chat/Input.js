import React, { useEffect, useState } from 'react'
import './Input.scss';
import {firstArea, secondArea, thirdArea, fourthArea, newMessage } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux';

function Inputt() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const selecteduser = useSelector(state => state.activeUse);
    const firstUserMessage = useSelector(state => state.firstUser);
    const secondUserMessage = useSelector(state => state.secondUser);
    const thirdUserMessage = useSelector(state => state.thirdUser);
    const fourthUserMessage = useSelector(state => state.fourthUser);

    useEffect(()=>{
        dispatch(newMessage(0));
    },[]);

    useEffect(()=>{
        if(firstUserMessage && firstUserMessage.length > 0){
            selecteduser !== 1 && dispatch(newMessage(1));
        }
    },[firstUserMessage]);

    useEffect(()=>{
        if(secondUserMessage && secondUserMessage.length > 0){
            selecteduser !== 2 && dispatch(newMessage(2));
        }
    },[secondUserMessage]);

    useEffect(()=>{
        if(thirdUserMessage && thirdUserMessage.length > 0){
            selecteduser !== 3 && dispatch(newMessage(3));
        }
    },[thirdUserMessage]);

    useEffect(()=>{
        if(fourthUserMessage && fourthUserMessage.length > 0){
            selecteduser !== 4 && dispatch(newMessage(4));
        }
    },[fourthUserMessage]);

    let botMessages = ['Hey', 'Hi!', 'whats up', 'How are you?', 'What a wonderful day!', 'Its been a long time', 'long time no see', 'Bye', 'Lets catch up!', 'Thanks' ]

    //Creates a rondom time less than 10 seconds
    let rondomTime = Math.floor((Math.random() * 10) + 1)*1000;

    // Creates a rondom varieble which determines which message will be send
    let rondomMessage = Math.floor((Math.random() * 9) + 1);

    const SentButton = e => {
        e.preventDefault();
        //If the input length is grater than zero, depending on the which bot user chating with, messages are recorted to store.
        if(input.length > 0){
            dispatch(selecteduser === 1 ? firstArea(input, 0) 
            : selecteduser === 2 ? secondArea(input, 0) 
            : selecteduser === 3 ? thirdArea(input, 0)
            : selecteduser === 4 ? fourthArea(input, 0) : ''  );
            setInput('');
            // After some rondom time, bot message is also recorded to the store with a robot id.
            setTimeout(()=>{
                dispatch(selecteduser === 1 ? firstArea(botMessages[rondomMessage], 1) 
                : selecteduser === 2 ? secondArea(botMessages[rondomMessage], 1) 
                : selecteduser === 3 ? thirdArea(botMessages[rondomMessage], 1)
                : selecteduser === 4 ? fourthArea(botMessages[rondomMessage], 1) : '' );
            },rondomTime);
        }
    }

    return (
        <div className='chat-input'>
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={"Send Message"}
                />
                <button onClick={SentButton} type="submit" >
                    Sent
                </button>
            </form>
        </div>
    );
};

export default Inputt;