import React, { useState } from 'react'
import './Banner.css'
// import Button from 'react-bootstrap/Button';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] =  useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'> 
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)}
                variant="outlined" className='banner__searchButton' style={{color: '#ff7779'}}>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                 
            </div>
            <div className='banner__info'>
                <h2>
                    Get out and stretch your imagination
                </h2>
                <h6>
                    Plan a different kind of getaway to uncover the hidden gems
                </h6>    
                <Button onClick={() => history.push('/search') } variant="outlined">Explore Nearby</Button>
            </div> 
        </div>
    )
} 
 
export default Banner
