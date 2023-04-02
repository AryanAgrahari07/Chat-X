import React, { useState } from 'react'
import './register.css'
import Add from'./images/avatar.jpg'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth, storage, db} from "../firebase";
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore";
// import Pro from './images/profileimg.jpg';
const defaultPhotoURL = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg';


const Register = () => {
  const [err,setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const photoURL = downloadURL ? downloadURL : Pro;


  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName =   e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
try{
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const storageRef = ref(storage, displayName);

  await uploadBytesResumable(storageRef, file).then(async () => {
    getDownloadURL(storageRef).then(async (downloadURL) => {
      const photoURL = downloadURL ? downloadURL : defaultPhotoURL;
   try {
      await updateProfile(res.user, {
        displayName ,
        photoURL,
      });
      await setDoc(doc(db, "users", res.user.uid), {
       uid: res.user.uid,
       displayName,
       email,
       photoURL,
       displayNameLowercase: displayName.toLowerCase(),
      });

      await setDoc(doc(db, "userChats",res.user.uid), {})
         navigate("/Home");
    }
    catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  }).catch(async() => {
    const photoURL = defaultPhotoURL;
    try {
      await updateProfile(res.user, {
        displayName,
        photoURL,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL,
        displayNameLowercase: displayName.toLowerCase(),
      });

      await setDoc(doc(db, "userChats", res.user.uid), {})
      navigate("/Home");
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  })
})
}catch (error) {
  console.log(error);
  setErr(true);
  setLoading(false);
}
};

  return (
    <div className='reg'>
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'> Chat-X</span>
        <span className='title'>Register</span>
        <form className='forms' onSubmit={handleSubmit}>
            <input className='fillitem' type="text" placeholder='Username'/>
            <input className='fillitem' type="email" placeholder='Email'/>
            <input className='fillitem' type="password" placeholder='Password'/>
            <input style={{display:"none"}} className='fillitem' type="file" id='file' />
            <label className='label' htmlFor="file">
             <img className='ava' src={Add} alt="" />
             <span>Add an avatar</span>
            </label>
            <button disabled={loading} className='btn'>Sign Up</button>
           {loading && "Uploading and compressing the image please wait..."}
           {err && <span> Something went wrong </span>}
        </form>
        <p>Already have a account? {" "}
          <Link to = "/login" style={{textDecoration : "none"}}>
            Login
           </Link>
           </p>
      </div>
    </div>
    </div>
  )
}

export default Register
