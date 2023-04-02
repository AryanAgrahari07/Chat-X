import React from 'react'
import './home.css'
import Chat from '../components/chat'
import Sidebar from '../components/sidebar'
import Rightbar from '../components/rightbar'

const Home = () => {
  return (
    <div className='home'>
     <div className='container'> 
          <Sidebar/>
          <Chat/>
          <Rightbar/>
     </div> 
    </div>
  )
}

export default Home
