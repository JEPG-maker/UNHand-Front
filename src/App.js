import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import SingUp from './components/pages/Registro';
import SingIn from './components/pages/Login';
import Socio from './components/pages/Socio';
import Solicitante from './components/pages/Solicitante';

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
      </Routes>
    </Router>
    </>
  );
}

export default App;
