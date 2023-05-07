import React from 'react'
import Home from './Home';
import Navbar from './Navbar';
import "./style.css"
function App() {
    const isLoading=true;
    // if(isLoading) return <h1>Loading...</h1>
    return (

        <div className="app">
            <Navbar/>
            <div className="contents">
            {isLoading &&  <Home/>}
            </div>
        </div>
    )
}

export default App



