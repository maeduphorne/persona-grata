import './RandomUser.css'
import apiCalls from '../../apiCalls';
import { useEffect, useState } from 'react';

const RandomUser = () => {
    const [userInfo, setUserInfo] = useState({});
    const [userQuote, setUserQuote] = useState({});

    useEffect(() => {
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
        apiCalls.fetchRandomQuote()
        .then((data) => (
            data = {
                quote: data.content,
                author: data.author
            }
        ))
        .then((data) => setUserQuote(data))
    }, [])
    
    return (
        <section className="user-info">
            User Info goes here!
            <div className="user-quote">
                User Quote goes here!
            </div>
        </section>
    )
}

export default RandomUser;


// user object:
// {
// gender: "",
// firstName: "",
// lastName: "",
// age: "",
// city: "",
// state: "",
// country: "",
// goToPassword: "",
// picture: ''
// }

// quote object:
// {
// content: "",
// author: ""
// }

// quoteObject.reduce((Obj, ) => {
//     return Obj
// }, {})