import { Link } from 'react-router-dom'
import React from 'react'

const Homepage = () => {
  
  return (
    <section className='App'>
      <div className='HomeCard'>
        <h1 className='title'>CODEWORDS</h1>
        <h3 className='subtitle'>Play with your friends.</h3>
        <input  autoFocus type='text' placeholder='Enter your nickname' className='Nickname'/>
        <div className='buttons'>
          <Link to="/room/play"><button type='submit' className='Button' >Create Room</button></Link>
          <Link to="/room"><button type='submit' className='Button' >I have a Room ID</button></Link>
        </div>
      </div>
    </section>
    
  )
}

export default Homepage
