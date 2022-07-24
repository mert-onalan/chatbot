import React, { useEffect, useRef } from 'react';
import Inputt from './Input';
import { useSelector } from 'react-redux';
import './Chat.scss'

const Chat = () => {

    const endOfMessages = useRef(null);
    const selectedUser = useSelector(state => state.activeUse);
    const selector = useSelector(state => selectedUser === 1 ? state.firstUser : selectedUser === 2 ? state.secondUser : selectedUser === 3 ? state.thirdUser : selectedUser === 4 ? state.fourthUser : state.firstUser);

    useEffect(()=>{
        endOfMessages.current?.scrollIntoView({behavior: "smooth"});
    },[selector])

    return (
        <div className='chat-area'>
            {
                selector && selector.length > 0 && selector.map((message,index) =>  {
                    return(
                        <div key={index} id={message.identifier === 0 ? 'me' : 'bot'} className='message'>
                            <div className='message-content'>{message.texts}</div>
                        </div>
                    )})
            }
            <div ref={endOfMessages} />
            
            <Inputt />
        </div>
    );
};

export default Chat;