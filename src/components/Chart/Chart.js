import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
        //     .then(res => res.json())
        //     .then(data => setData(data));
        axios.get('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(data => {
                let year = 1990;
                const allData = data.data;
                const newData = allData.map(d => {
                    d.marks = d.sell;
                    d.year = (year = year + 5);
                    delete d.revenue;
                    return d;
                })
                setData(newData);
            })
    }, []);

    return (
        <section className='my-40'>
            <h1 className='text-4xl text-center font-bold mb-20'>Progress Chart</h1>
            <div className='flex justify-center'>
                <LineChart
                    width={800}
                    height={400}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis dataKey="marks" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </div>
        </section>
    );
};

export default Chart;