import './UserCard.css'
import PropTypes from 'prop-types';

const UserCard = ({ userInfo }) => {
  return(
    <section className="user-info">
      <img src={userInfo.photo} alt="Random user headshot" className='user-photo'/>
      <div className="user-card-text">
        <div className="user-stats">
            <p className='user-name'>Name: {userInfo.firstName} {userInfo.lastName}</p>
            <p className='user-age'>Age: {userInfo.age}</p>
            <p className='user-gender'>Gender: {userInfo.gender}</p>
            <p className='user-location'>Location: {`${userInfo.city}, ${userInfo.state}, ${userInfo.country}`}</p>
            <p className='user-screenname'>First AIM screenname: {userInfo.username}</p>
        </div>
        <div className="user-quote">
            My favorite quote: {`${userInfo.quote} - ${userInfo.author}`}
        </div>
      </div>
    </section>
  )
}

export default UserCard;

UserCard.propTypes = {
  userInfo: PropTypes.object.isRequired
};