import BlueZilla from '../../images/BlueZilla.svg';
import Navbar from './Navbar';
import CurrencyChanger from './CurrencyChanger';


const Header = () => {

    return (
        <header className="mainHeader">
            <a href="/" ><img className="blueZilla" src={BlueZilla} alt="logo" /></a>

            <CurrencyChanger />
            <Navbar />
        </header>
    );
}

export default Header;