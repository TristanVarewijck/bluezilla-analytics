import React from "react";
import * as d3 from "d3";

// basic chart variables 
const width = 45;
const height = 25;

const LineChart = (props) => {
    const value = props.value;
    const color = props.color;
    const trigger = props.trigger
    // create chart 
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        d3.json(`https://api.coingecko.com/api/v3/coins/${value}/market_chart?vs_currency=usd&days=1&interval=Hourly`).then((d) => {
            d = (d.prices.slice(1).slice(-15));
            d = d.reverse();
            let parse = d3.timeParse("%s");
            d.forEach((i) => {
                i.date = Number(parse(i[0]));
                i.price = Number(i.price = Math.round(i[1] * 1000));

            });

            console.log("its changing automatically!")

            setData(d);
        });
    }, [trigger]);

    const yMinValue = d3.min(data, (d) => d.price),
        yMaxValue = d3.max(data, (d) => d.price);

    const getX = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date))
        .range([0, width]);

    const getY = d3
        .scaleLinear()
        .domain([yMinValue - 1, yMaxValue + 2])
        .range([height, 0]);

    const linePath = d3
        .line()
        .x((d) => getX(d.date))
        .y((d) => getY(d.price))
        .curve(d3.curveMonotoneX)(data);

    const areaPath = d3
        .area()
        .x((d) => getX(d.date))
        .y0((d) => getY(d.price))
        .y1(() => getY(yMinValue - 1))
        .curve(d3.curveMonotoneX)(data);

    return (
        <div>
            <svg
                viewBox="-8 -5 37 35"
                width="45" height="45">
                <path fill={color} d={areaPath} opacity={0.3} />
                <path strokeWidth={1} fill="none" stroke={color} d={linePath} />
            </svg>
        </div>
    );
}

export default LineChart;