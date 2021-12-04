import axios from 'axios';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import LineChart from '../d3/LineChart';
import Accordion from "./Accordion";
import React, { useState, useEffect } from 'react';

const TokenIcon = styled.img`
border-radius: 5px; 
width: 25px; 
height: 25px;
margin-right: .5em; 
`
// status
const statusPostive = {
    color: '#4DDAAD',
}
const statusNegative = {
    color: '#DE3E3D',
}

let vs_currency = "usd";

const PriceChangesList = () => {

    // states 
    const [active, setActive] = useState("");
    const [data, setData] = useState([]);

    // api request with interval
    useEffect(() => {
        const interval = setInterval(async () => {
            await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&ids=ethpad%2C%20velas%2C%20adapad%2C%20gamezone%2C%20pulsepad%2C%20tronpad%2C%20nftlaunch%2C%20kccpad%2C%20bscpad&order=market_cap_desc%2C%20volume_desc&sparkline=false&price_change_percentage=1h`)
                .then(res => {
                    let coinsArray = res.data;
                    // sort from hight to low
                    coinsArray = coinsArray.sort((a, b) => (a.current_price > b.current_price) ? -1 : ((b.current_price > a.current_price) ? 1 : 0))

                    let cleanedCoinsArray;
                    cleanedCoinsArray = cleaning(coinsArray);
                    setData(cleanedCoinsArray);
                })
                .catch(err => {
                    console.log(err)
                })
        }, 5000);
        return () => clearInterval(interval);
    }, [])


    function cleaning(coinsArray) {
        return coinsArray.map(i => {
            return {
                name: i.id.charAt(0).toUpperCase() + i.id.slice(1),
                currentPrice: Math.round(i.current_price * 100) / 100,
                priceChange1Hour: Math.round(i.price_change_percentage_1h_in_currency * 100) / 100,
                tokenIcon: i.image,
            }
        })
    }

    return (
        <div className="pricesList">
            <ol className='list'>
                {data.map((i) => (
                    <li key={i.name} onClick={() => setActive(i.name)}>
                        <Card>
                            <Card.Body>
                                <TokenIcon src={i.tokenIcon} alt={i.name + "icon"} />
                                <Card.Text className="group" >{i.name}</Card.Text>
                                <Card.Text><span>$</span>{i.currentPrice}</Card.Text>

                                {i.priceChange1Hour > 0 ?
                                    <Card.Text style={statusPostive}>{i.priceChange1Hour}%</Card.Text>
                                    :
                                    <Card.Text style={statusNegative}>{i.priceChange1Hour}%</Card.Text>
                                }

                                {i.priceChange1Hour > 0 ?
                                    <LineChart color={statusPostive.color} value={i.name} trigger={data} />
                                    :
                                    <LineChart color={statusNegative.color} value={i.name} />
                                }
                            </Card.Body>
                        </Card >
                        <Accordion name={i.name} active={active} />
                    </li >
                ))}
            </ol >
        </div >
    );
}
export default PriceChangesList;




