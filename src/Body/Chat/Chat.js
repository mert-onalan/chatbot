import React from 'react';
import Inputt from './Input';
import './Chat.scss'
import { useSelector } from 'react-redux';

const Chat = () => {
    const selectedUser = useSelector(state => state.activeUse);

    const selector = useSelector(state => selectedUser === 1 ? state.firstUser : selectedUser === 2 ? state.secondUser : selectedUser === 3 ? state.thirdUser : selectedUser === 4 ? state.fourthUser : state.firstUser);

    return (
        <div className='chat-area'>
            {
                selector && selector.length > 0 && selector.map((mes,index) =>  <div key={index}>{mes}</div> )
            }
            <Inputt />
        </div>
    );
};

export default Chat;