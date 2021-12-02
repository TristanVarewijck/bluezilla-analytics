import BlueZilla from '../../images/BlueZilla.svg';
import Navbar from './Navbar';
import CurrencyChanger from './CurrencyChanger';
import CurrentData from './CurrentData'
import React from 'react';


class Header extends React.Component {

    render() {
        return (
            <header className="mainHeader">
                <a href="/" ><img className="blueZilla" src={BlueZilla} alt="logo" /></a>
                <div>
                    <CurrencyChanger />
                    <Navbar />
                    <CurrentData />

                </div>

            </header>
        );
    }
}


export default Header;