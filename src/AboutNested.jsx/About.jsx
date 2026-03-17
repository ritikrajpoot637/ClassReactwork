import React from 'react'
import {Link, Outlet} from 'react-router-dom';
const About = () => {
  return (
   <>
    <div>About</div>
    <nav className='nav'>
      <Link className="nav-link"  to='AboutComp'>AboutCompany</Link>
     <Link className="nav-link"  to="AboutTeam">AboutTeam</Link>
    </nav>
     
     <Outlet/>

   </>

  )
}

export default About