import React from 'react'
import { Link } from 'react-router-dom'
import ads from '../../images/ads.png'
import person from '../../images/person.png'
import Navbar from './AuthNavbar.js'
export default function User_profile() {
  return (
    <div className='user-profile'>
         <Navbar/>
      <div className='top-user_profile'>
          <div>{`welcome  USER NAME`}</div>
          <Link to='/post_form' className='ads-button'>
              <div className='ads-button-img'><img src={ads} alt=''/></div>
              <div className='ads-post-content'>add post</div>
         </Link>
      </div>

      <div className='midle-user-profile'>
          <div className='midle-image'><img src={person} alt=''/></div>
          <div>{'USER NAME'}</div>
      </div>

      <div className='min-midle-user-profile'>
          <div className='first-min-midle'>{`Member since 2020`}</div>
          <div className='second-min-midle'>Not verified</div>
      </div>

      <div className='footer-user-profile'>
          <div className='user-info'>{`Dear USER NAME you dont have any post yet
           to add post please click the button bellow`}</div>
          <Link to='/post_form'>
            <button className='add-post-button'>Add post</button>
          </Link>
      </div>
    </div>
  )
}
