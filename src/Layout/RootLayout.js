import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/headers/Header';
class RootLayout extends Component {
    render() { 
        return (
            <React.Fragment>
                <Header/>
                <Outlet/>
            </React.Fragment>
        );
    }
}
 
export default RootLayout;