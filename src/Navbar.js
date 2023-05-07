import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <h1>WELCOME CA309</h1>
                <div className="links"  >
                    <a href="/">Home</a>
                    <a href="/create" style={{
                        color: "white",
                        backgroundColor: "red",
                        padding: 10,
                        borderRadius: 10
                    }}>Create Post</a>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
