import BlueZilla from '../../images/BlueZilla.svg';
import Navbar from './Navbar';
import CurrencyChanger from './CurrencyChanger';


const Header = () => {

    return (
        <header className="mainHeader">
            <a href="/" ><img className="blueZilla" src={BlueZilla} alt="logo" /></a>
            <div>
                <CurrencyChanger />
                <Navbar />
            </div>

        </header>
    );
}

export default Header;