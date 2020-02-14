import React from "react"
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const data = [{name: 'Feb', available: 4000},
    {name: 'Mar', available: 3200},
    {name: 'Apr', available: 2400},
    {name: 'May', available: 1600},
    {name: 'Jun', available: 800},
    {name: 'Jul', available: 0}];

const data2 = [{name: 'Feb', available: 4000.50},
    {name: 'Mar', available: 3200.32},
    {name: 'Apr', available: 2400},
    {name: 'May', available: 2000},
    {name: 'Jun', available: 1600},
    {name: 'Jul', available: 1200}];

const Trend = () => {
    return (
        <div>

            <LineChart width={600} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="available" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            <p>Projection of your financial state in six months</p>
        </div>
    )
};

export default Trend;
