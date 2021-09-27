import './SavedUsers.css'
import UserCard from '../UserCard/UserCard';
import PropTypes from 'prop-types';

const SavedUsers = ({ savedUsersInfo }) => {
  const savedUserCards = savedUsersInfo.map((userInfo) => {
    return (
      <div>
        <UserCard key={userInfo.id} userInfo={userInfo} />
      </div>
    )
  })
  
  return (
    <div className="saved-container">
      {!savedUsersInfo.length && <h3 className="no-saved">You have not saved any users yet! Please return home to generate a random user</h3>}
      {savedUserCards}
    </div>
  )
}

export default SavedUsers;

SavedUsers.propTypes = {
  savedUsersInfo: PropTypes.array.isRequired
};