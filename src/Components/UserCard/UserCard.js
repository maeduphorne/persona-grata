import './UserCard.css'

const UserCard = ({ key, userInfo }) => {
  return(
    <section className="user-info">
      <img src={userInfo.photo} alt="Random user headshot" className='user-photo'/>
      <ul>
          <li className='user-name'>Name: {userInfo.firstName} {userInfo.lastName}</li>
          <li className='user-age'>Age: {userInfo.age}</li>
          <li className='user-gender'>Gender: {userInfo.gender}</li>
          <li className='user-location'>Location: {`${userInfo.city}, ${userInfo.state}, ${userInfo.country}`}</li>
          <li className='user-screenname'>First AIM screenname: {userInfo.username}</li>
      </ul>
      <div className="user-quote">
          My favorite quote: {`${userInfo.quote} - ${userInfo.author}`}
      </div>
    </section>
  )
}

export default UserCard;