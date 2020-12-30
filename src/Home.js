import React from 'react';
import './Home.css'
import Banner from './Banner'
import Card from './Card'


function Home() {
    return ( 
        <div className='home'>
            <Banner />

            <div className = "home__section">
                <Card
                    src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    // src=""
                    title="Beach Side"
                    description="With an amazing view of paradise"
                />
                <Card
                    src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80"
                    // src=""
                    title="Beach Side"
                    description="With an amazing view of paradise"
                />
                <Card
                    src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80"
                    // src=""
                    title="Beach Side"
                    description="With an amazing view of paradise"
                />
            </div>
            <div className = "home__section">
            <Card
                    src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    // src=""
                    title="Beach Side"
                    description="With an amazing view of paradise"
                    price="$59.99"
                />
                <Card
                    src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80"
                    // src=""
                    title="Beach Side"
                    description="With an amazing view of paradise"
                    price="$59.99/Night"
                />
                <Card
                    src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80"
                    // src=""
                    title="Beach Side"
                    description="With an amazing view of paradise"
                    price="$59.99"
                />
            </div>
        </div>
    )
}

export default Home
