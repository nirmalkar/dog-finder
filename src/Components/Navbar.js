import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const dogLinks = this.props.dogs.map(dog => (
    <li className="nav-item active">
      <NavLink to={`/dogs/${dog.name}`} className='nav-link' key={dog.name}>{dog.name}</NavLink>
    </li>
  ))
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Dog App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" href="#">Home</NavLink>
            </li>
            {dogLinks}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
