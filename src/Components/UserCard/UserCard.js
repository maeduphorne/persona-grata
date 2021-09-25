import './UserCard.css'

const UserCard = ({ userInfo }) => {
  return(
    <section className="user-info">
      <img src={userInfo.photo} alt="Random user headshot"/>
      <ul>
          <li>Name: {userInfo.firstName} {userInfo.lastName}</li>
          <li>Age: {userInfo.age}</li>
          <li>Gender: {userInfo.gender}</li>
          <li>Location: {`${userInfo.city}, ${userInfo.state}, ${userInfo.country}`}</li>
          <li>First AIM screenname: {userInfo.username}</li>
      </ul>
      <div className="user-quote">
          My favorite quote: {`${userInfo.quote} - ${userInfo.author}`}
      </div>
    </section>
  )
}

export default UserCard;