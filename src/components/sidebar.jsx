import React ,{useState}from 'react';
import Navbar from './navbar'
import Search from './search'
import Chats from './chats'
// import { collection, getDocs } from "firebase/firestore";
// import firestore from "./firebase";
// import { db } from '../firebase'
// import {db} from '../firebase'; 
// import 'firebase/database';
// import { getDatabase ,ref, onValue} from 'firebase/database';

const Sidebar = () => {
//   const [users, setUsers] = useState([]);
const [showSidebar, setShowSidebar] = useState(false);

const handleToggleSidebar = () => {
  setShowSidebar(!showSidebar);
}

//   useEffect(() => {
//     // Retrieve User Data
//     async function getUsers() {
//       const usersCollection = collection(db, "users");
//       const usersSnapshot = await getDocs(usersCollection);
//       const usersList = usersSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         name: doc.data().name,
//       }));
//       setUsers(usersList);
//     }

//     getUsers();
//   }, []);
  return (
    <>
    <div className={`sidebar ${showSidebar ? 'open' : ''}`} style={{overflow:"scroll"}}> 
      <Navbar/>
      {/* <div > */}
      <Search/>
      <Chats/>
      {/* </div> */}
        {/* {users.map((user) => (
      <div className='chats'>
       <div className='userchat' key={chat[0]} onClick={()=> handleSelect(chat[1].userInfo)}>
         <img className='searchimg' src={user.photoURL} alt="" />
         <div className='userchatinfo'>
           <span className='userchatinfospan'>{user.displayName}</span>
           <p className='userchatinfop'>{user.lastMessage?.text}</p>
         </div>
       </div>
     </div>
        ))}
    </div> */}

{/* <div className='chats'>
{users.map((user) => (
      // {Object.entries(users)?.sort((a,b)=>b[1].date - a[1].date).map((user) => (
     <div className='userchat' key={user.id} >
        <img className='searchimg' src="" alt="" />
        <div className='userchatinfo'>
          <span className='userchatinfospan'>{user.name}</span>
          {/* <p className='userchatinfop'>{chat[1].lastMessage?.text}</p> */}
        {/* {/* </div> */}
      {/* </div>

      ))}
    </div> */}
    </div>
    <button className="toggle-sidebar" onClick={handleToggleSidebar}>
     {showSidebar ? 'Close Chats' : 'Open Chats'}
   </button>
  </>
  )
}

export default Sidebar