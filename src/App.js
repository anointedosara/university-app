import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Countries from './Component/Countries';
import CountryDetails from './Component/CountryDetails';
import Navbar from './Component/Navbar';
import UniversityDetails from './Component/UniversityDetails';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/country' exact component={Countries} />
      <Route exact path='/country/:country'>
        <CountryDetails />
      </Route>
      <Route path='/country/:country/:name' component={UniversityDetails} />
    </div>
  );
}

export default App;
