import React from 'react'
import jiko from '../../images/jikon.jpg'

export default function Jumbotron() {
  return (
    <div className='jumbotron'>
      <div className='left_side'>
          <div className='jumbotron_content'>Let's us transform our workout into new style!</div>
          <button className='jumbotron_button'>Explore now</button>
      </div>
      <div className='jumbotron_image'><img src={jiko} alt=''/></div>
    </div>
  )
}
