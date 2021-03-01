import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'; 

import Home from './pages/Home';
import Clientes from './pages/Clientes';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/clientes" exact component={Clientes} />
        </BrowserRouter>
    );
  };


export default Routes;