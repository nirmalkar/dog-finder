import React, { Component } from 'react'
import './DogsList.css'
import { Link } from 'react-router-dom'
export class DogList extends Component {

  render() {
    return (
      <div className='dog-list-background'>
        <div className='display-3'>Dogs List</div>
        <div className="dog-list mt-5">
          <div className="container">
            <div className="row no-gutters">
              {this.props.dogs.map(d => (
                <div className="dog col-lg-4">
                  <div key={d.name}>
                    <img className='shadow' src={d.src} alt={d.name} /><br />
                    <Link className='dog-details-link' exact to={`/dogs/${d.name}`}>{d.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default DogList
