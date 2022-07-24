import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className='header-left'>
                <div className='avatar'> 
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="user0" />
                </div>
                <div className='user-info' >
                    <div> Jeff Müller </div>
                    <div className='status' />
                </div>
            </div>
            <div className='header-middle'>
                ChatBot
            </div>
            <div className='header-right'>
            </div>
        </div>
    )
}

export default Header;