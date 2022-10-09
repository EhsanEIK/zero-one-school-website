import React from 'react';
import News from '../News/News';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Welcome></Welcome>
            <News></News>
        </div>
    );
};

export default Home;