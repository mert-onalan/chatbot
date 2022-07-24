import React from 'react';
import './Sidebar.scss';
import Userbot from '../../UserBot/Userbot'
import {  useDispatch } from 'react-redux';
import {activeUser} from '../../actions/actions'

let userBots= [
    {id: 1, name: 'Thomas Collin', photoUrl : 'https://images.pexels.com/photos/9607206/pexels-photo-9607206.jpeg?auto=compress&cs=tinysrgb&w=1600', photoAlt:'user1' },
    {id: 2, name: 'Carly Gilfoy', photoUrl : 'https://images.pexels.com/photos/11900126/pexels-photo-11900126.jpeg?auto=compress&cs=tinysrgb&w=1600', photoAlt:'user2' },
    {id: 3, name: 'Glenn Bremen', photoUrl : 'https://images.pexels.com/photos/5591671/pexels-photo-5591671.jpeg?auto=compress&cs=tinysrgb&w=1600', photoAlt:'user3' },
    {id: 4, name: 'Enes Yilmaz', photoUrl : 'https://images.pexels.com/photos/7561911/pexels-photo-7561911.jpeg?auto=compress&cs=tinysrgb&w=1600', photoAlt:'user4' },
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