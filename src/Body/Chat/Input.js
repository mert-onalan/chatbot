import React, { useState } from 'react'
import './Input.scss'

function Inputt() {

    const [input, setInput] = useState("");

    return (
        <div className='chat-input'>
            <form action="">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={"Send Message"}
                />
                <button type="submit" >
                    Sent
                </button>
            </form>
        </div>
    );
};

export default Inputt;