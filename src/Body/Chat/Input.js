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
        dispatch(selecteduser === 1 ? firstArea(input) 
        : selecteduser === 2 ? secondArea(input) 
        : selecteduser === 3 ? thirdArea(input)
        : selecteduser === 4 ? fourthArea(input) : ''  );
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