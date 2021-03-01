import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
const Home = () => {
    return(
       <>
            <h1>Home Page</h1>
            <Link to="/clientes">Clientes</Link>
       </>
    );
}

export default Home;