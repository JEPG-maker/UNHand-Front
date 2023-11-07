import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import SingUp from './components/pages/Registro';
import SingIn from './components/pages/Login';
import Socio from './components/pages/Socio';
import Solicitante from './components/pages/Solicitante';
import Historial from './components/pages/Historial';
import RateUser from './components/pages/RateUser.js';
import RateSocio from './components/pages/RateSocio.js';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/Login' exact Component={SingIn} />
        <Route path='/Registro' exact Component={SingUp} />
        <Route path='/Socio' exact Component={Socio} />
        <Route path='/Solicitante' exact Component={Solicitante} />
        <Route path='/Historial' exact Component={Historial} />
        <Route path='/RatingUser' exact Component={RateUser} />
        <Route path='/RatingSocio' exact Component={RateSocio} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
