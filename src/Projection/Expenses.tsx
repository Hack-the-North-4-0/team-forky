import React from "react"
import {PieChart, Pie, Tooltip} from 'recharts';

const data01 = [
    { name: 'Accommodation', value: 800 }, { name: 'Bills', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'Rent', value: 650 },
    { name: 'Council Tax', value: 150 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const Expenses = () => {
    return (
        <div>
            <PieChart width={600} height={600}>
                <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />

                <Tooltip/>
            </PieChart>
        </div>
    )
};

export default Expenses;
