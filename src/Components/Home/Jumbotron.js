import React from 'react'
import {Link} from 'react-router-dom'
import jiko from '../../images/jikon.jpg'

export default function Jumbotron() {
  return (
    <div className='jumbotron'>
      <div className='left_side'>
          <div className='jumbotron_content'>Let's us transform our workout into new style!</div>
          <button className='jumbotron_button'>Explore now</button>
      </div>
      <div className='jumbotron_image'><img src={jiko} alt=''/></div>
      <div className='jumbotron-desktop-search'>
        <div className='search-container'>
          <input className='search-container-input' type="text" placeholder='Searching...'/>
        </div>
        <div className='post-container'>
           <Link to='/login'><div className='post-container-symbol'>+</div></Link>
          <div className='post-container-detail'>Post your add for free</div>
        </div>
      </div>
    </div>
  )
}
