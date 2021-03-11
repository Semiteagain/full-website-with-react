import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';
import Service from './components/Services'



function App() {
    

    return (
        <>
        <Router>
        < Navbar/>
            <Switch>
                 <Route path='/' exact component={Home}/>
                 <Route path='/products' exact component={Product} />
                 <Route path='/services' component={Service} />
              

            </Switch>
        </Router>
            
        </>
    )
}


export default App