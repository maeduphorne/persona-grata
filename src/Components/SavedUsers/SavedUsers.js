import './SavedUsers.css'
import UserCard from '../UserCard/UserCard';

const SavedUsers = ({ savedUsersInfo }) => {
//bring in savedUsers from App as a prop
//array of saved users

  const savedUserCards = savedUsersInfo.map((userInfo) => {
    return (
      <div>
        <UserCard 
          key={Date.now()}
          userInfo={userInfo} 
          // userQuote={UserQuote}
        />
      </div>
    )
  })
  
  return <div>{savedUserCards}</div>
}

export default SavedUsers;