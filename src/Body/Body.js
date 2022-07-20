import React from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import './Body.scss'

function Bodyy() {

    return (
        <div>
            <div className='chat-body' >
                <Sidebar />
                <Chat/>
            </div>
        </div>
    )
}

export default Bodyy