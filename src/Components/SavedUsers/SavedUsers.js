import './SavedUsers.css'
import UserCard from '../UserCard/UserCard';

const SavedUsers = ({ savedUsersInfo, savedUsersQuotes}) => {
//bring in savedUsers from App as a prop
//array of saved users

  const savedUserCards = savedUsersInfo.map((userInfo) => {
    return(
      <div>
        <UserCard 
          userInfo={userInfo} 
          userQuote={UserQuote}
        />
      </div>
    )
  })
  
}

export default SavedUsers;