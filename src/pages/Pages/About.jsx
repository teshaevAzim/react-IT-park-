import React from 'react'
import Css from '../../components/Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import Img from '../../img/1.jpg'



const Pages = () => {
  return (
    <div>
      <nav>
          <div className="nav_link">
              
              <div className="wrapper">
                <ul>
                    <li><h1>Logo</h1></li>
                </ul>
                <ul>
                    <li>
                        <Link to={`/`}><h2>Home</h2></Link>
                    </li>
                    <li className='active'>
                        <Link to={`/about`}><h2>About</h2></Link>
                    </li>
                    <li>
                        <h2>Skills</h2>
                    </li>
                    <li>
                        <h2>Works</h2>
                    </li>
                </ul>
              </div>
          </div>
      </nav>
      
    </div>
  )
}

export default Pages