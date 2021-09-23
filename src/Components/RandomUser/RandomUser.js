import './RandomUser.css'
import apiCalls from '../../apiCalls';
import { useEffect, useState } from 'react';

const RandomUser = () => {
    const [userInfo, setUserInfo] = useState({});
    const [userQuote, setUserQuote] = useState({});

    useEffect(() => {
        apiCalls.fetchRandomUser()
        .then((data) => setUserInfo(data))
        apiCalls.fetchRandomQuote()
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