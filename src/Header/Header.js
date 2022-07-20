import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className='header-left'>
                <div className='avatar' />
            </div>
            <div className='header-middle'>
                <input placeholder="Search in messanger"   />
            </div>
            <div className='header-right'>
            </div>
        </div>
    )
}

export default Header;