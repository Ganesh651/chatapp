import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Message from '../Message'
import UsersList from '../UsersList'
import './index.css'

const userList = ["Ganesh", "Swetha", "Lingareddy", "Andamma", "Ravi", "Ajay", "Sandeep", "Praveen"]

const ChatApp = () => {
  const [message, setMessage] = useState("")
  const [chatting, setChatting] = useState([])

  const onSendMessage = () => {
    if (message === "") {
      alert("Enter Message")
    } else {
      const randomIndex = Math.floor(Math.random() * userList.length)
      const profileLogo = userList[randomIndex].slice(0, 1)
      const user = userList[randomIndex]
      const today = new Date()
      const hour = today.getHours()
      const minutes = today.getMinutes()
      const newChat = {
        id: uuidv4(),
        message,
        user,
        profileLogo,
        hour,
        minutes
      }
      setChatting([...chatting, newChat])
      setMessage("")
    }
  }

//   useEffect(() => {
//     const keyDownHanddler = event => {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         onSendMessage();
//       }
//     }
// document.addEventListener("keydown", keyDownHanddler)
//   }, [])


  
  return (
    <div className="App">
      {/* <div className='header'>

      </div> */}
      <div className="chat-container">
        {chatting.length === 0 ? <> Your Chat Goes Here... </> : <>
          {chatting.map((chatMessage) => (
            <Message key={chatMessage.id} chatMessage={chatMessage} />
          ))}
        </>}
      </div>
      <div className="input-container">
        <input className="input"
          type="text"
          placeholder="Type Message"
          onChange={e => setMessage(e.target.value)}
          value={message} />
        <UsersList userList={userList} />
        <button type="button" className="button" onClick={onSendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}



export default ChatApp
