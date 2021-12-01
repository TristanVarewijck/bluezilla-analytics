import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import LineChart from '../d3/LineChart';
import Accordion from "./Accordion";

// styled component
const TokenIcon = styled.img`
border-radius: 5px; 
width: 25px; 
height: 25px;
margin-right: .5em; 
`

// compenent function
const PriceChangesList = () => {

    // status
    const statusPostive = {
        color: '#4DDAAD',
    }

    const statusNegative = {
        color: '#DE3E3D',
    }

    // states 
    const [active, setActive] = useState("");
    const [Coins, setCoins] = useState([]);

    // api request with interval
    useEffect(() => {
        const interval = setInterval(async () => {
            await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethpad%2C%20velas%2C%20adapad%2C%20gamezone%2C%20pulsepad%2C%20tronpad%2C%20nftlaunch%2C%20kccpad%2C%20bscpad&order=market_cap_desc%2C%20volume_desc&sparkline=false&price_change_percentage=1h')
                .then(res => {

                    let coinsArray = res.data;

                    // sort from high - low 
                    coinsArray = coinsArray.sort((a, b) => (a.current_price > b.current_price) ? -1 : ((b.current_price > a.current_price) ? 1 : 0))
                    setCoins(coinsArray)
                })
                .catch(err => {
                    console.log(err)
                })
            // interval of 1000ms
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    // Inline Data cleaning SUPERHANDIG!
    return (
        <div className="pricesList">
            <ol className='list'>
                {/* for each coin i want you to do the following: */}
                {Coins.map((coin) => (
                    // unique list id
                    // Set active with a value 
                    <li key={coin.id} onClick={() => setActive(coin.id)}>
                        <Card>
                            <Card.Body>
                                <TokenIcon src={coin.image} alt="coin-icon" />
                                {/* Set every name to capitlize */}
                                < Card.Text className="group" >
                                    {coin.id.charAt(0).toUpperCase() + coin.id.slice(1)}
                                </Card.Text>

                                {/* Set decimals */}
                                <Card.Text>
                                    ${Math.round(coin.current_price * 100) / 100}
                                </Card.Text>

                                {/*  */}
                                {coin.price_change_percentage_1h_in_currency > 0 ?
                                    <Card.Text style={statusPostive}>
                                        {Math.round(coin.price_change_percentage_1h_in_currency * 100) / 100}%
                                    </Card.Text>
                                    :
                                    <Card.Text style={statusNegative}>
                                        {Math.round(coin.price_change_percentage_1h_in_currency * 100) / 100}%
                                    </Card.Text>
                                }

                                {coin.price_change_percentage_1h_in_currency > 0 ?
                                    <LineChart color={statusPostive.color} value={coin.id} trigger={coin.current_price} />
                                    :
                                    <LineChart color={statusNegative.color} value={coin.id} />
                                }
                            </Card.Body>
                        </Card >
                        <Accordion id={coin.id} active={active} />
                    </li >
                ))}
            </ol >
        </div >
    );
}
export default PriceChangesList;