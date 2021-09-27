import './RandomUser.css'
import apiCalls from '../../apiCalls';
import { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';

const RandomUser = ({ savedUsersInfo, setSavedUsersInfo }) => {
  const [userInfo, setUserInfo] = useState({});
  const [btnIsToggled, setbtnIsToggled] = useState(false);
  const [userInfoError, setUserInfoError] = useState('')

  const fetchUser = () => {
    return Promise.all([apiCalls.fetchRandomUser(), apiCalls.fetchRandomQuote()])
  }

    const getRandomUser = () => {
    let data;
    fetchUser()
    .then((promises) => {
      data = promises[0].results.reduce((Obj, result) => {
        Obj.id = result.login.uuid;
        Obj.firstName = result.name.first;
        Obj.lastName = result.name.last;
        Obj.age = result.dob.age;
        Obj.gender = result.gender;
        Obj.city = result.location.city;
        Obj.state = result.location.state;
        Obj.country = result.location.country;
        Obj.username = result.login.username;
        Obj.photo = result.picture.large;
        return Obj
        }, {})
      data.quote = promises[1].content
      data.author = promises[1].author
      setUserInfo(data)
    })
    .catch(error => setUserInfoError('Unable to find a user. Please refresh the page or try again later.'))
}

const handleNewUser = (event) => {
  if(!btnIsToggled){
    setbtnIsToggled(true)
  } else {
    setbtnIsToggled(false)
  }
}

const handleSavedUsersClick = () => {
  if(!savedUsersInfo.includes(userInfo)){
    setSavedUsersInfo([...savedUsersInfo, userInfo])
  }
}

useEffect(() => {
  getRandomUser()
  // setbtnIsToggled(true)
}, [btnIsToggled])

return (
  <div>
      <h2 className="instructions">
        Below is a random user to help inspire you while creating a User Persona.<br></br>
        Read their randomly generated details carefully and let your imagination run wild!<br></br>
        Refer to the Suggested Questions section for assistance in thinking through your user's personality.
      </h2>
      {!userInfo.length && userInfoError && <section className="user-error"> {userInfoError} </section>}
      { userInfo &&
        <section className="random-user-section">
          <UserCard userInfo={userInfo} />
          <div className="button-wrapper">
            <button className="generate-user-btn" onClick={handleNewUser}>Generate New User</button>
            <button className="save-user-btn" onClick={handleSavedUsersClick}>Save User Persona</button>
          </div>
        </section>
      }
  </div>
)
}

export default RandomUser;