import './App.css';
import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import RandomUser from '../RandomUser/RandomUser';
import SavedUsers from '../SavedUsers/SavedUsers';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import SuggestedQuestions from '../SuggestedQuestions/SuggestedQuestions';


const App = () => {
  // set new state property for savedUsers
const [savedUsers, setSavedUsers] = useState([])
// handleClick function for saved user button
// saves new user to the savedUsers array if it doesn't already contain that user
// pass this function as a prop for Random User so it can be executed on click

  return (
    <main className="App">
      <header>
        {/* <Link to="/" className="home-click"> */}
          <h1>
            Persona Grata
          </h1>
        {/* </Link> */}
      </header>
      <div className="main-section-wrapper">
        <SuggestedQuestions />
        {/* insert random user component */}
        {/* Route to homepage */}
        <RandomUser savedUsers={savedUsers} setSavedUsers={setSavedUsers}/>
        {/* Route to saved users */}
        {/* insert saved users component */}
        {/* insert error handling component */}
      </div>
    </main>
  );
}

export default App;
