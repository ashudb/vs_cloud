import React from 'react'
import logo from '../images/logo.png'

function Header(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "red"}}>
        <a className="navbar-brand" href="#">

        <img src={logo} width="40" height="40" className="d-inline-block align-top ml-5" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">About us</a>
            <a className="nav-item nav-link" href="#">Services</a>
            <a className="nav-item nav-link" href="#">Our Products</a>
            <a className="nav-item nav-link" href="#">Our Products</a>
            <a className="nav-item nav-link" href="#">Career</a>
            <a className="nav-item nav-link" href="#">Contact</a>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header;