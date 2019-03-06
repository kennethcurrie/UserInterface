import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
      
    return (
      <div className="App">
        <div className="App-header">

          <h2>Reports</h2>
        </div>
        <p className="App-intro">
            A report that shows you
        </p>
        <nav>
         <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <Link to="/about/123" activeClassName="active">About us</Link>
        </nav>
        { this.props.children }
      </div>
    );
  }
}

export default App;
