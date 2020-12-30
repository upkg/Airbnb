import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Avatar } from "material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";



function Header() {
    return (
        <div className='header'>

            <Link to='/'>
                <img className='header__icon'
                src="https://logos-download.com/wp-content/uploads/2016/03/Airbnb_logo-700x218.png" 
                alt='logo'>
                </img>            
            </Link>
            

            <div className='header__center'>
                <input type='text' />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>


        </div>

        

    )
}

export default Header
