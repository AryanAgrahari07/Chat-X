import React  , {useContext, useState,useEffect} from 'react'
import Message from './message'
import { doc, onSnapshot } from "firebase/firestore";
import {db} from "../firebase"
import { ChatContext } from '../ChatContext';


const Messages = () => {
    const [messages,setMessages] = useState([]);
    const {data} = useContext(ChatContext);
  
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unSub();
    }
  }, [data.chatId])
  
  console.log(messages)
  return (
    <div className='messages'>
      {messages.map((m)=> (
        <Message message={m} key={m.id}/>
      ))}      
    </div>
  )
}

export default Messages;
