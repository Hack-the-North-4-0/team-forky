import React from "react"
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const data = [{name: 'Feb', available: 8000, withPartTimeJob: 8000},
    {name: 'Mar', available: 6400, withPartTimeJob: 6800},
    {name: 'Apr', available: 4800, withPartTimeJob: 5600},
    {name: 'May', available: 5000, withPartTimeJob: 6800},
    {name: 'Jun', available: 3200, withPartTimeJob: 5100},
    {name: 'Jul', available: 1200, withPartTimeJob: 3200}];

const Trend = () => {
    return (
        <div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="available" stroke="#8884d8" />
                { false && <Line type="monotone" dataKey="withPartTimeJob" stroke="#82ca9d"/> }
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend></Legend>
            </LineChart>
            <p>Projection of your financial state in six months</p>
        </div>
    )
};

export default Trend;
