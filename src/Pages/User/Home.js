import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-center text-2xl'> Welcome to Home Page</h1>

            <div className='flex justify-center items-center'>

                <Link to="/register"><button className='btn btn-success'>Register</button></Link>
            </div>



        </div>
    );
};

export default Home;