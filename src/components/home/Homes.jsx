import React, { useState } from 'react';
import { homeData } from '../../DummyData';
import Home from './Home';
import './Home.css'
const  Homes  = () => {
    const [items ] = useState(homeData)
    
        return (
            <>
                <section className='home'>
                    <Home items={items}/>
                </section>
                <div className="margin">
                    
                </div>
            
            </>
        );
    
}
 
export default Homes;