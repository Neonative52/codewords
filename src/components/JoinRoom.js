import {Link} from 'react-router-dom';
import React, { useState } from 'react'

const JoinRoom = () => {
  const content = (
    <section className='App'>
      <div className='JoinCard'>
        <p className='Welcome'>Welcome to Codewords</p>
        <form method = 'POST' className='NicknameForm'>
            <input  autoFocus type='text' placeholder='Enter Room ID' className='RoomID' />
            <Link to="/room/play"><button type='submit' className='Button'>Join Room</button></Link>
        </form>
      </div>
    </section>
  )
  return content;
}

export default JoinRoom
