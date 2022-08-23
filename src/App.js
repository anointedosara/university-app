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
      <Redirect from="/home" to="/" />
      <Route path='/about' component={About} />
      <Route path='/country' exact component={Countries} />
      <Route path='/country/:details' exact component={CountryDetails} />
      <Route path='/country/:details/:name' component={UniversityDetails} />
    </div>
  );
}

export default App;
