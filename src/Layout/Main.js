import React from 'react';
import Nav from '../Pages/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;