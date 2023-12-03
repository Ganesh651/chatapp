import Popup from 'reactjs-popup'
import './index.css'


const UsersList = (props) => {
  const { userList } = props
  return (
    <Popup trigger={
    <button type="button" className="usersList">
    @
  </button>}
  position="top right"
  >
      {userList.map((user, index) => (
        <p key={index} style={{ color:"#05f545", fontWeight:"600"}}>{ user}</p>
    ))}
    </Popup>
  )
}


export default UsersList