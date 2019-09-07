import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainHead extends Component {
  render() {
    return (
      <div className="mainhead">
        <div className="container">
          <div className="row">
            <div>
              <img src="images/fwd-logo.png" alt="logo" />
            </div>
            <div className="ml-auto">
              <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to={'/'} >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/search'} >Auction</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Watchlist'} >Watchlist</Link> 
                    </li>
                    <li className="nav-item dropdown">
                      <Link to={'/'} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Account
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to={'/'}>Dashboard</Link>
                        <Link className="dropdown-item" to={'/'}>Profile</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MainHead;