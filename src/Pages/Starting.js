import React from 'react';
import { Link } from 'react-router-dom';

const Starting = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello Everyone</h1>
                <p className="mb-5">Welcome to TNA system of W. Apparels Ltd. It's is a powerful software that can auto predict the dates which helping us to prepare our products for delivery in time.</p>
                <Link to='/tna'><button className="btn btn-accent m-5">See previous TNA</button></Link>
                <Link to='/tnahome'><button className="btn btn-primary">Create a new</button></Link>
                </div>
            </div>
            </div>
    );
};

export default Starting;