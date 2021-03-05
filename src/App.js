import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Product from './components/Product';


function App() {
    

    return (
        <>
        <Router>
        < Navbar/>
            <Switch>
                 <Route path='/' exact/>
                 <Route path='./Product' component={Product} />
            </Switch>
        </Router>
            
        </>
    )
}


export default App