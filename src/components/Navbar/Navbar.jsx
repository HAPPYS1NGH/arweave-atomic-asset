import { Link } from 'react-router-dom'
import './Navbar.css'
import { ConnectButton } from 'arweave-wallet-kit'
function Navbar() {
    return (
        <nav className="header">
            <div >
                <Link className='wallet-button'
                    to={"/"}
                >
                    Arweave For Everyone
                </Link>
            </div>
            <div >
                <Link to={"/about/"} className='wallet-button'>
                    About
                </Link>
            </div>
            <div className='connect'>
                <div >
                    <ConnectButton className='wallet-button' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar