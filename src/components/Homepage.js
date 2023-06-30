import { Link } from 'react-router-dom'
import React from 'react'

const Homepage = () => {

  return (
    <section className='App'>
      <div className='HomeCard'>
        <h1 className='title'>CODEWORDS</h1>
        <h3 className='subtitle'>Play with your friends.</h3>
            <Link to="/room"><button type='submit' className='Button' >Create Room</button></Link>
      </div>
    </section>
    
  )
}

export default Homepage
