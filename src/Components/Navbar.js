import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(dog => (

      <NavLink exact to={`/dogs/${dog.name}`} className='nav-link' key={dog.name}>{dog.name}</NavLink>
    ))
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink exact to='/' className="navbar-brand">Dog App</NavLink>
          <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to='/dogs' className="nav-link">Home</NavLink>
              </li>
              {dogLinks}
            </ul>
          </div>
        </nav>
      </div >
    )
  }
}

export default Navbar
