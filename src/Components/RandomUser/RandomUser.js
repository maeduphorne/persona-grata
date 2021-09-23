import './RandomUser.css'
import apiCalls from '../../apiCalls';
import { useEffect, useState } from 'react';

const RandomUser = () => {
  // bring in savedUsers from App as a prop
const [userInfo, setUserInfo] = useState({});
    const [userQuote, setUserQuote] = useState({});
  const [btnIsToggled, setbtnIsToggled] = useState(false);

  const getRandomUser = () => {
    apiCalls.fetchRandomUser()
    .then((data) => (
        data = data.results.reduce((Obj, result) => {
          Obj.firstName = result.name.first;
          Obj.lastName = result.name.last;
          Obj.age = result.dob.age;
          Obj.gender = result.gender;
          Obj.city = result.location.city;
          Obj.state = result.location.state;
          Obj.country = result.location.country;
          Obj.username = result.login.username;
          Obj.password = result.login.password;
          Obj.photo = result.picture.large;
          return Obj
        }, {})))
    .then((data) => setUserInfo(data))
}

const getRandomQuote = () => {
  apiCalls.fetchRandomQuote()
  .then((data) => (
      data = {
        quote: data.content,
        author: data.author
      }
  ))
  .then((data) => setUserQuote(data))
}

const handleNewUser = (event) => {
  console.log('refresh!')
  if(!btnIsToggled){
    setbtnIsToggled(true)
  } else {
    setbtnIsToggled(false)
  }
}

useEffect(() => {
  getRandomUser()
  getRandomQuote()
  // setbtnIsToggled(true)
}, [btnIsToggled])

return (
  <div>
      <h2>
          Instructions go here
      </h2>
      <section className="user-info">
          <img src={userInfo.photo} alt="Random user headshot"/>
          <ul>
              <li>Name: {userInfo.firstName} {userInfo.lastName}</li>
              <li>Age: {userInfo.age}</li>
              <li>Gender: {userInfo.gender}</li>
              <li>Location: {`${userInfo.city}, ${userInfo.state}, ${userInfo.country}`}</li>
              <li>Go-to Login: {`Username: ${userInfo.username} & Password: ${userInfo.password}`}</li>
          </ul>
          <div className="user-quote">
              My favorite quote: {`${userQuote.quote} - ${userQuote.author}`}
          </div>
      </section>
      <button onClick={handleNewUser}>Generate New User</button>
      <button>Save User Persona</button>
      <button>Go to Saved Users</button>
  </div>
)
}

export default RandomUser;