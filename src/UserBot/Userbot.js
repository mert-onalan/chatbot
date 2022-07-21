import { useSelector } from 'react-redux';
import './Userbot.scss';

const Userbot = ({photoUrl, photoAlt, userName, id}) => {
    const selectedUser = useSelector(state => state.activeUse)
    return(
        <div className= {"user-card ".concat(id === selectedUser ? 'selected' : '')} >
            <div className="profile-photo">
                <img src= {`${photoUrl}`} alt={`${photoAlt}`} />
            </div>
            <div className="username">{userName}</div>
            <div className="unread-message"></div>
        </div>
    )
}

export default Userbot;