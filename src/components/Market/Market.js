import HeaderText from "../HeaderText";
import PriceChangesList from "./PriceChangesList";


const Market = () => {

    // data ophalen
    return (
        <div className="Home">
            <HeaderText title="Market Prices" tagline="Price changes of Bluezilla projects" />

            {/* COIN LIST */}
            <PriceChangesList />

        </div>

    );
}

export default Market;