import React from 'react'
import { Link } from '@reach/router'

const Header = () => {
    return (
        <div>
            <header className="App">
                <h1>Quote Ranks</h1>
                <h6><Link to = "/">Home</Link></h6>
            </header>
        </div>
    )
}

export default Header
