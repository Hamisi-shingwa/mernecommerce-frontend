import React, { Component } from 'react'
import Ads from './Ads'
import { Categories } from './Categories'
import Filter from './Filter'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Search from './Search'

export default class Home_main extends Component {
  render() {
    return (
      <div className='Home'>
        <Search/>
        <Navbar/>
        <Jumbotron/>
        <Categories/>
        <Filter/>
        <Ads/>
        <Footer/>
      </div>
    )
  }
}
