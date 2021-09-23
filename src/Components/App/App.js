import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import RandomUser from '../RandomUser/RandomUser';
import SavedUsers from '../SavedUsers/SavedUsers';
import ErrorHandling from '../ErrorHandling/ErrorHandling';
import SuggestedQuestions from '../SuggestedQuestions/SuggestedQuestions';

const App = () => {
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
        <RandomUser/>
        {/* insert saved users component */}
        {/* insert error handling component */}
      </div>
    </main>
  );
}

export default App;
