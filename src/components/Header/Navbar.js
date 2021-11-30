
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../../images/Hamburger.svg'
import BlueZilla from '../../images/BlueZilla.svg'

const Navbar = () => {
    // Hooks
    const [showMenu, setShowMenu] = useState(false)
    let menu;
    let menuMask;

    if (showMenu) {
        menu = <div className='menu'>
            <p>Menu</p>
            <ol>

                <li>
                    <Link className="nav-link" to={"/"} onClick={() => setShowMenu(false)}>
                        Analytics
                    </Link>
                </li>

                <li>
                    <Link className="nav-link" to={"/market"} onClick={() => setShowMenu(false)}>
                        Market
                    </Link>

                </li>

                <li>
                    News
                </li>

                <li>
                    Community
                </li>
            </ol>
            <img className='blueZilla' src={BlueZilla} alt="" />
        </div>
        menuMask = <div className='menuMask'
            onClick={() => setShowMenu(false)}
        ></div>
    }

    return (
        <nav>
            <button onClick={() => setShowMenu(!showMenu)}><img className="Hamburger" src={Hamburger} alt="Hamburger" /></button>
            {menuMask}
            {menu}
        </nav>

    );
}

export default Navbar;