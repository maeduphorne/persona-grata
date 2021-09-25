import './SavedUsers.css'
import UserCard from '../UserCard/UserCard';

const SavedUsers = ({ savedUsersInfo }) => {
  const savedUserCards = savedUsersInfo.map((userInfo) => {
    return (
      <div>
        <UserCard key={Date.now()} userInfo={userInfo} />
      </div>
    )
  })
  
  return <div>{savedUserCards}</div>
}

export default SavedUsers;