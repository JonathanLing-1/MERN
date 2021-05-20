import React from 'react'
import { Link } from "@reach/router"

const Header = () => {
    return (
        
        <header>
            <h1>Food Trucks</h1>
            <div>
                <li>< Link to="/"></Link> Dashboard </li>
                <li>< Link to="/truck/new"></Link> New Truck</li>
            </div>
        </header>
    )
}

export default Header
