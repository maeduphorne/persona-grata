import './App.css';
import { useState } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import RandomUser from '../RandomUser/RandomUser';
import SavedUsers from '../SavedUsers/SavedUsers';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import SuggestedQuestions from '../SuggestedQuestions/SuggestedQuestions';


const App = () => {
  // set new state property for savedUsers
const [savedUsersInfo, setSavedUsersInfo] = useState([])
// handleClick function for saved user button
// saves new user to the savedUsers array if it doesn't already contain that user
// pass this function as a prop for Random User so it can be executed on click

  return (
    <main className="App">
      <header>
        <Link to="/" className="home-click">
          <h1>Persona Grata</h1>
        </Link>
        <NavLink className='saved-link' to='/savedUsers'>View Saved Users</NavLink>
      </header>;
      <div className="main-section-wrapper">
        <SuggestedQuestions />
        <Switch>
          <Route 
            exact path='/' 
            render={() => 
              <RandomUser savedUsersInfo={savedUsersInfo} setSavedUsersInfo={setSavedUsersInfo} />
            }
          />
          <Route 
            exact path='/savedUsers' 
            render={() => 
              <SavedUsers savedUsersInfo={savedUsersInfo}/>
            }
          />
        </Switch>
      </div>
    </main>
  );
}

export default App;
