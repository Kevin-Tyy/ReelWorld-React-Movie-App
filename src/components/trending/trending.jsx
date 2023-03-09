import React, { Component, useState } from 'react';
import Home from '../home/Home';
import { trending } from '../../DummyData';
import './trending.css'
const  Trending = () => {
    const [items,setitems]  = useState(trending)
    return(
        <>
            <section className='trending'>
                <Home items={items} />
            </section>    
        </>
    )
};

export default Trending;