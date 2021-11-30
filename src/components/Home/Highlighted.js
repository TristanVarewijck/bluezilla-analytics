import axios from 'axios';
import React, { useState, useEffect } from 'react';

// No interval at first load 
const Highlighted = () => {
    const statusPositive = {
        color: 'green',
    }

    const [data, setData] = useState([]);
    useEffect(() => {
        const interval = setInterval(async () => {
            await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethpad%2C%20velas%2C%20adapad%2C%20gamezone%2C%20pulsepad%2C%20tronpad%2C%20nftlaunch%2C%20kccpad%2C%20bscpad&order=market_cap_desc%2C%20volume_desc&sparkline=false&price_change_percentage=1h')
                .then(res => {
                    let highestPrice = Math.max.apply(null, res.data.map(r => r.price_change_percentage_1h_in_currency));
                    let highlightedCoin = res.data.find(e => e.price_change_percentage_1h_in_currency === highestPrice);
                    // console.log(randomCoin);
                    setData(highlightedCoin)
                })
                .catch(err => {
                    console.log(err)
                })

        }, 3000);
        return () => clearInterval(interval);

    }, [])
    return (


        <div>

            {data.current_price ?
                <div className='highlighted-currency'>
                    {/* prices from api */}
                    <h2> ${Math.round(data.current_price * 100) / 100}</h2>
                    <p style={statusPositive}>↑{Math.round(data.price_change_percentage_1h_in_currency * 100) / 100}%</p>
                    {/* id */}
                    <p>{data.id}</p>
                    <img src={data.image} alt="Token icon" width='50px' />
                </div>
                :
                <div className='highlighted-currency'>
                    {/* prices from api */}
                    <h2>Loading</h2>
                    <p>Loading</p>
                    {/* id */}
                    <p>Loading</p>
                </div>
            }
        </div>

    );
}

export default Highlighted;