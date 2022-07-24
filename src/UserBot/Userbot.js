import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteNewMessage} from '../actions/actions'
import './Userbot.scss';

const Userbot = ({photoUrl, photoAlt, userName, id}) => {

    const dispatch = useDispatch();
    const selectedUser = useSelector(state => state.activeUse);
    const unreadedMessages = useSelector(state => state.newMessage);
    const numberOfUnreadMessages = unreadedMessages.filter(e => e === id).length;

    useEffect(() => {
        dispatch(deleteNewMessage(selectedUser))
    },[selectedUser]);

    return(
        <div className= {"user-card ".concat(id === selectedUser ? 'selected' : '')} >
            <div className="profile-photo">
                <img src= {`${photoUrl}`} alt={`${photoAlt}`} />
            </div>
            <div className="username">{userName}</div>
            <div className={"unread-message".concat(unreadedMessages.length > 0 && unreadedMessages.find(mes => mes === id) ? " exist" : "")}> 
                { unreadedMessages.length > 0 && unreadedMessages.find(mes => mes === id ) ? numberOfUnreadMessages  : ''  } 
            </div>
        </div>
    )
}

export default Userbot;