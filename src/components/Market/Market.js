import HeaderText from "../HeaderText";
import PriceChangesList from "./PriceChangesList";
import InfoBar from "./InfoBar";


const Market = () => {

    // data ophalen
    return (
        <div className="Home">
            <HeaderText title="Market Prices" tagline="Price changes of Bluezilla projects" />
            {/* INFO BAR */}
            <InfoBar />

            {/* COIN LIST */}
            <PriceChangesList />

        </div>

    );
}

export default Market;