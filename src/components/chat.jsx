import React, { useContext } from 'react'
import Add from '../pages/images/add.png'
import Call from '../pages/images/call.png'
import More from '../pages/images/more.png'
import Messages from './messages'
import Input from './input'
// import { auth } from '../firebase'
import { ChatContext } from '../ChatContext'
const Chat = () => {
  // const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
    <div className='chatinfo'>
      <span>{data.user?.displayName}</span>
      <div className='chaticons'>
        <img className='chaticonimgadd' src={Add} alt="" />
        <img className='chaticonimgcall' src={Call} alt="" />
        <img className='chaticonimg' src={More} alt="" />
      </div>
    </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat
