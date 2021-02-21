import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenue = () => setClick(true);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'> 
                       42 <i className='fav fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMobileMenue}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Content' className='nav-link' onClick={closeMobileMenue}>
                                Content
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/About' className='nav-link' onClick={closeMobileMenue}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Sign-up' className='nav-link' onClick={closeMobileMenue}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn-outline'>SING UP</Button>}
                </div>
            </nav>
        </>

    )
}

export default Navbar
