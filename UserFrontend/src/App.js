import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './component/create.component';
import Index from './component/index.component';

// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (<Router>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="navbar-brand">Full Cycle</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/create'} className="nav-link">Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/index'} className="nav-link">Show Product</Link>
                        </li>
                    </ul>
                </div>
            </nav> <br/>
            <h2>Product Management System.</h2> <br/>
            <Switch>
                <Route exact path='/create' component={ Create } />
                <Route path='/index' component={ Index } />
            </Switch>
        </div>
    </Router>);
  }
}

export default App;
