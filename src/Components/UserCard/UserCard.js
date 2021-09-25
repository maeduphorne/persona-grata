import './UserCard.css'

const UserCard = ({ userInfo }) => {
  //move JSX to render a user into card
  // this will be a child of saved users & RandomUser(import in both)
  return(
    <section className="user-info">
      <img src={userInfo.photo} alt="Random user headshot"/>
      <ul>
          <li>Name: {userInfo.firstName} {userInfo.lastName}</li>
          <li>Age: {userInfo.age}</li>
          <li>Gender: {userInfo.gender}</li>
          <li>Location: {`${userInfo.city}, ${userInfo.state}, ${userInfo.country}`}</li>
          <li>First AIM screenname: {`Username: ${userInfo.username}`}</li>
      </ul>
      {/* <div className="user-quote">
          My favorite quote: {`${userQuote.quote} - ${userQuote.author}`}
      </div> */}
    </section>
  )
}

export default UserCard;