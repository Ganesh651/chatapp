import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Message = props => {
  const [count, setCount] = useState("")
  const [isLiked,setIsLiked] = useState(false)
  const { chatMessage } = props
  const { message, profileLogo, user, minutes, hour } = chatMessage
  
  const updatedMinutes = minutes < 10 ? "0" + minutes : minutes
  // const tweelveHoursFormat = hour - 24
  // console.log(tweelveHoursFormat)

  const increaseCount = () => {
    setCount(count + 1)
    setIsLiked(true)
  }

  const decreaseCount = () => {
    setCount(count - 1)
    setIsLiked(false)
  }

  
const empty = count === 0 && ''
  return (
    <div className="chatting-container">
      <div className="profile-container">
        <h3>{profileLogo}</h3>
      </div>
      <div className="message-container">
        <div style={{ marginBottom: "5px" }}>
          <span>{user}</span>
          <span className="time">{" "}{hour}:{updatedMinutes}</span>
        </div>
        <div className="message">
          <span>{message}</span>
          {isLiked ?
            <button type="button" className="immpresion-container" onClick={decreaseCount}>
              <BiDislike /> <span>{String(count)}</span>
          </button> :
            <button type="button" className="immpresion-container" onClick={increaseCount}>
              <BiLike /> <span>{empty}</span>
            </button>
          }        
        </div>
      </div>
    </div>
  )
}



export default Message