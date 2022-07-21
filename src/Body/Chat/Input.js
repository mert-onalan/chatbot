import React, { useState } from 'react'
import './Input.scss';
import {firstArea, secondArea, thirdArea, fourthArea } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux';

function Inputt() {

    const [input, setInput] = useState("");

    const dispatch = useDispatch()

    const selecteduser = useSelector(state => state.activeUse)

    const SentButton = e => {
        e.preventDefault();
        dispatch(selecteduser === 1 ? firstArea(input, 0) 
        : selecteduser === 2 ? secondArea(input, 0) 
        : selecteduser === 3 ? thirdArea(input, 0)
        : selecteduser === 4 ? fourthArea(input, 0) : ''  );
        setInput('');
    }

    return (
        <div className='chat-input'>
            <form action="">
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