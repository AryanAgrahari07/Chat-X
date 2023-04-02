import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../AuthContext'
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
          <span className='logonav'>Chat-X</span>
           <div className='user'>
           <img className='NavAvatar' src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
             <button className='Navbtn' onClick={()=>signOut(auth)}>Logout</button>
        </div>
      
    </div>
  )
}

export default Navbar
