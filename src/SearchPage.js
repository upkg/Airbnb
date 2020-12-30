import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    62 stays . 27 november to 1 december . 3 guest
                </p>
                <h1>
                    Stays Nearby
                </h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult
                 img = "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80"
                 location = "Marvelous in its minimalist design"
                 title = "Enjoy a weekend of bliss"
                 description= "1 cupboard . 1 cup . 1 bed . 1 mat"
                 star = {4.56}
                 price = "$35 / night"
                 total = "$100 total"
            />

            <SearchResult
                 img = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                 location = "Marvelous in its minimalist design"
                 title = "Enjoy a weekend of bliss"
                 description= "1 guetst . 2 bedrooms . 2 shared bathrooms . Wifi"
                 star = {4.56}
                 price = "$35 / night"
                 total = "$100 total"
            />

            <SearchResult
                 img = "https://images.unsplash.com/photo-1546552229-7b16095d6904?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
                 location = "An open space design creates an environment of relaxation"
                 title = "Spend a weekend with the family far from the stress of th city"
                 description= "1 cupboard 1 cup 1 bed 1 mat"
                 star = {4.56}
                 price = "$35 / night"
                 total = "$100 total"
            />

        </div>
    )
}

export default SearchPage
