import React from 'react'
import {useState,useEffect}from 'react'
// import Search from './search'
import Pro from '../pages/images/profileimg.jpg';
import {db} from "../firebase"

import { collection, getDocs } from "firebase/firestore";

const Rightbar = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Retrieve User Data
        async function getUsers() {
          const usersCollection = collection(db, "users");
          const usersSnapshot = await getDocs(usersCollection);
          const usersList = usersSnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().displayName,
            photoURL: doc.data().photoURL,
          }));
          setUsers(usersList);
        }
    
        getUsers();
      }, []);


    const [showRightbar, setShowRightbar] = useState(false);

const handleToggleRightbar = () => {
  setShowRightbar(!showRightbar);
}
  return (
    <>
    <div className={`rightbar ${showRightbar ? 'open' : ''}`} style={{overflow:"scroll"}}>
      <div className='registered users'>
         <div className='headingright'>   
            <span className='heading'>Registered Users</span>
         </div>
          { users.map((user) => (
        <div className='userchat' key={user.id}  >
        {/* <img className='searchimg' src={} alt="" /> */}
        <img className='searchimg' src={user.photoURL ? user.photoURL : Pro} style={{width:"20px", height:"20px"}} alt="" />

        {/* <img className='searchimg' src={ (user.id === (undefined ||   null)) ?  */}
    {/* Pro : user.photoURL} alt="" /> */}
        <span key={user.id} className='userchatinfospan' style={{fontSize:"15px",fontWeight:"100"}}>{user.name}</span>
         </div>
         ))}
        </div>      
    </div>
    <button className="toggle-rightbar" onClick={handleToggleRightbar}>
     {showRightbar ? 'Close Users List' : 'Open Users List'}
   </button>
   </>
  )
}

export default Rightbar
