import React, {FC} from "react"
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

var data = [{name: 'Feb', available: 8000, withHelp: 8000, withHelp2: 8000, withHelp3: 8000, withHelp4: 8000, withHelp5: 8000},
    {name: 'Mar', available: 6400, withHelp: 6800, withHelp2: 7000, withHelp3: 7100, withHelp4: 7200, withHelp5: 7350},
    {name: 'Apr', available: 4800, withHelp: 5600, withHelp2: 5800, withHelp3: 5900, withHelp4: 6100, withHelp5: 6250},
    {name: 'May', available: 5000, withHelp: 6800, withHelp2: 7000, withHelp3: 7100, withHelp4: 7200, withHelp5: 7350},
    {name: 'Jun', available: 3200, withHelp: 5100, withHelp2: 5300, withHelp3: 5400, withHelp4: 5500, withHelp5: 5650},
    {name: 'Jul', available: 1200, withHelp: 3200, withHelp2: 3400, withHelp3: 3500, withHelp4: 3600, withHelp5: 3750}];

export interface TrendInterface {
    count: number;
}

const Trend: FC<TrendInterface> = (props: TrendInterface) => {
    return (
        <div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="available" stroke="#8884d8" />
                { props.count === 1  && <Line type="monotone" dataKey="withHelp" stroke="#82ca9d"/> }
                { props.count === 2  && <Line type="monotone" dataKey="withHelp2" stroke="#82ca9d"/> }
                { props.count === 3  && <Line type="monotone" dataKey="withHelp3" stroke="#82ca9d"/> }
                { props.count === 4  && <Line type="monotone" dataKey="withHelp4" stroke="#82ca9d"/> }
                { props.count === 5  && <Line type="monotone" dataKey="withHelp5" stroke="#82ca9d"/> }
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend></Legend>
            </LineChart>
            <p>Projection of your finances over the next six months.</p>
            <p>Please note this is based on your current bank account activity.</p>
        </div>
    )
};

export default Trend;
