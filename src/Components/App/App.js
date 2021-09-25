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
      <div className="main-section-wrapper">
        <SuggestedQuestions />
        <Switch>
          <Route 
            exact path='/' 
            render={() => 
              <div>
                <NavLink className='saved-link' to='/savedUsers'>View Saved Users</NavLink>
                <RandomUser savedUsersInfo={savedUsersInfo} setSavedUsersInfo={setSavedUsersInfo} />
              </div>
            }
          />
          <Route 
            exact path='/savedUsers' 
            render={() =>
              <div>
                <NavLink className='home-link' to='/'>Take Me Home</NavLink>
                <SavedUsers savedUsersInfo={savedUsersInfo}/>
              </div>
            }
          />
          <Route 
            render={() => <ErrorHandling />}
          />
        </Switch>
      </div>
    </main>
  );
}

export default App;
