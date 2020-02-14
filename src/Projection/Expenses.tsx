import React from "react"
import {PieChart, Pie, Tooltip} from 'recharts';

const data01 = [
    { name: 'Accommodation', value: 800 }, { name: 'Bills', value: 280 },
    { name: 'Groceries', value: 200}, { name: 'Others', value: 320}
];
const data02 = [
    { name: 'Rent', value: 650 },
    { name: 'Council Tax', value: 150 },
    { name: 'Electricity', value: 120 },
    { name: 'Water', value: 80 },
    { name: 'Entertainment', value: 60 },
    { name: 'Internet', value: 20 },
    { name: 'Groceries', value: 200 },
    { name: 'Shopping', value: 230 },
    { name: 'Transport', value: 70 },
    { name: 'Night out', value: 20 }
];

const Expenses = () => {
    return (
        <div>
            <PieChart width={600} height={400}>
                <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={120} fill="#8884d8" />
                <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={125} outerRadius={145} fill="#82ca9d" label />
                <Tooltip/>
            </PieChart>
            <p>Approximate monthly expenses based on your bank account activity</p>
        </div>
    )
};

export default Expenses;
