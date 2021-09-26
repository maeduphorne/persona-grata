import './SavedUsers.css'
import UserCard from '../UserCard/UserCard';

const SavedUsers = ({ savedUsersInfo }) => {
  const savedUserCards = savedUsersInfo.map((userInfo) => {
    return (
      <div>
        <UserCard key={userInfo.id} userInfo={userInfo} />
      </div>
    )
  })
  
  return <div className="saved-container">{savedUserCards}</div>
}

export default SavedUsers;