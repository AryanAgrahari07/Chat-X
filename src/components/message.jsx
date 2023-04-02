// import React, { useContext, useEffect, useRef } from "react";
// import { AuthContext } from "../AuthContext";
// import { ChatContext } from "../ChatContext";

// const Message = ({message}) => {
//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);
 
//   const ref = useRef();
//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   return (
//     <div ref={ref} className={`message ${message.senderId === currentUser.uid && "owner"}`}>
//       <div className="messageinfo">
//         <img className='msginfoimg' src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           } alt="" />
//         <span>just now</span>
//       </div>
//       <div className="messagecontent">
//        <p className='msgp'>{message.text}</p>
//        {message.img && <img className='msgcontentimg' src={message.img} alt="" />}
//       </div>

//       <div className="messageinfo">
//         <img className='msginfoimg' src={
//             message.senderId === currentUser.uid
//               ? currentUser.photoURL
//               : data.user.photoURL
//           } alt="" />
//         <span>just now</span>
//       </div>
//       <div className="messagecontent">
//        <p className='msgp'>{message.text}</p>
//        {message.img && <img className='msgcontentimg' src={message.img} alt="" />}
//       </div>
//     </div>
//   )
// }

// export default Message


import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../AuthContext";
import { ChatContext } from "../ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img className="msginfoimg"
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p className='msgp'>{message.text}</p>
        {message.img && <img  className='msgcontentimg' src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;