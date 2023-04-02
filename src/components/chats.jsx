import React , {useContext, useState,useEffect}from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../AuthContext';
import { ChatContext } from '../ChatContext';
import {db} from "../firebase"

const Chats = () => {

  const [chats, setChats] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);
  

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data())
  });
    
    return()=>{
      unsub();
    }
  }
  currentUser.uid && getChats();
  }, [currentUser.uid])


  const handleSelect  = (u) => {
    dispatch({type : "CHANGE_USER", payload: u})
  }
  

  return (
    <div className='chats'>
      {/* <div className='head'>
      <span className='headsection'> CHATS</span>
      </div> */}
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>(
     <div className='userchat' key={chat[0]} onClick={()=> handleSelect(chat[1].userInfo)}>
        <img className='searchimg' src={chat[1].userInfo.photoURL} alt="" />
        <div className='userchatinfo'>
          <span className='userchatinfospan'>{chat[1].userInfo.displayName}</span>
          <p className='userchatinfop'>{chat[1].lastMessage?.text}</p>
        </div>

        
          </div>
      ))}

      
    </div>
  )
}

export default Chats
