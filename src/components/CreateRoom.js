import {Link,useNavigate} from 'react-router-dom';
import React, { useState } from 'react'

const CreateRoom = () => {
  const content = (
    <section className='App'>
      <div className='CreateCard'>
        <p className='Welcome'>Welcome to Codewords</p>
        <form method = 'POST' className='NicknameForm'>
            <label htmlFor='Nickname'>To enter the room, choose a nickname.</label>
            <input  autoFocus type='text' placeholder='Enter your nickname' className='Nickname' />
            <Link to="/room/play"><button type='submit' className='Button' >Create Room</button></Link>
        </form>
      </div>
    </section>
  )
  return content;
}

export default CreateRoom
