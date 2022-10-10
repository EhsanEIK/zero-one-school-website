import React from 'react';
import Chart from '../Chart/Chart';
import News from '../News/News';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Welcome></Welcome>
            <Chart></Chart>
            <News></News>
        </div>
    );
};

export default Home;