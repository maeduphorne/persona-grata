import './App.css';
import { useState } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import RandomUser from '../RandomUser/RandomUser';
import SavedUsers from '../SavedUsers/SavedUsers';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import SuggestedQuestions from '../SuggestedQuestions/SuggestedQuestions';


const App = () => {
const [savedUsersInfo, setSavedUsersInfo] = useState([])

  return (
    <main className="App">
      <header>
        <Link to="/" className="home-click">
          <h1>Persona Grata</h1>
        </Link>
      </header>
      <Switch>
        <Route 
          exact path='/' 
          render={() => 
            <div>
              <NavLink className='saved-link' to='/savedUsers'>View Saved Users</NavLink>
              <div className="main-section-wrapper">
                <SuggestedQuestions />
                <RandomUser savedUsersInfo={savedUsersInfo} setSavedUsersInfo={setSavedUsersInfo} />
              </div>
            </div>
          }
        />
        <Route 
          exact path='/savedUsers' 
          render={() =>
            <div>
              <NavLink className='home-link' to='/'>Take Me Home</NavLink>
              <div className="main-section-wrapper">
                <SuggestedQuestions />
                <SavedUsers savedUsersInfo={savedUsersInfo}/>
              </div>
            </div>
          }
        />
        <Route 
          render={() => <ErrorHandling />}
        />
      </Switch>
    </main>
  );
}

export default App;
