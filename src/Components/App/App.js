import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import RandomUser from '../RandomUser/RandomUser';

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
      {/* insert random user component */}
      {/* insert saved users component */}
      {/* insert error handling component */}
    </main>
  );
}

export default App;
