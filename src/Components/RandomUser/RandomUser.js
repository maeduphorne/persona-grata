import './RandomUser.css'
import apiCalls from '../../apiCalls';
import { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';

const RandomUser = ({ savedUsersInfo, setSavedUsersInfo }) => {
  const [userInfo, setUserInfo] = useState({});
  const [btnIsToggled, setbtnIsToggled] = useState(false);

  const fetchUser = () => {
    return Promise.all([apiCalls.fetchRandomUser(), apiCalls.fetchRandomQuote()])
  }

    const getRandomUser = () => {
    let data;
    fetchUser()
    .then((promises) => {
      console.log(promises)
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
}
//   const getRandomUser = () => {
//     apiCalls.fetchRandomUser()
//     .then((data) => (
//         data = data.results.reduce((Obj, result) => {
//           Obj.firstName = result.name.first;
//           Obj.lastName = result.name.last;
//           Obj.age = result.dob.age;
//           Obj.gender = result.gender;
//           Obj.city = result.location.city;
//           Obj.state = result.location.state;
//           Obj.country = result.location.country;
//           Obj.username = result.login.username;
//           Obj.photo = result.picture.large;
//           return Obj
//         }, {})))
//     .then((data) => setUserInfo(data))
// }

// const getRandomQuote = () => {
//   apiCalls.fetchRandomQuote()
//   .then((data) => (
//       data = {
//         quote: data.content,
//         author: data.author
//       }
//   ))
//   .then((data) => setUserQuote(data))
// }

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
      <h2>
          Instructions go here
      </h2>
      <UserCard userInfo={userInfo} />
      <button className="generate-user-btn" onClick={handleNewUser}>Generate New User</button>
      <button className="save-user-btn" onClick={handleSavedUsersClick}>Save User Persona</button>
  </div>
)
}

export default RandomUser;