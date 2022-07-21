import React from 'react';
import './Sidebar.scss';
import Userbot from '../../UserBot/Userbot'
import {  useDispatch } from 'react-redux';
import {activeUser} from '../../actions/actions'

let userBots= [
    {id: 1, name: 'Thomas Collin', photoUrl : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', photoAlt:'user1' },
    {id: 2, name: 'Carly Gilfoy', photoUrl : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', photoAlt:'user1' },
    {id: 3, name: 'Glenn Bremen', photoUrl : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', photoAlt:'user1' },
    {id: 4, name: 'Su Yilmaz', photoUrl : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', photoAlt:'user1' },
]

const Sidebar = () => {

    const dispatch = useDispatch();

    return (
        <>
            <div className='chat-sidebar'>
                {
                    userBots.map(users => {
                        return(
                            <div onClick={()=> dispatch(activeUser(users.id))}  key={users.id}>
                               <Userbot id={users.id} userName={users.name} photoUrl={users.photoUrl} photoAlt={users.photoAlt} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Sidebar;