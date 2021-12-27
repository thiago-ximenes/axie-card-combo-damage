import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AxiesTeam from './pages/AxiesTeam';
import {  HashRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/axie-team/" element={ <AxiesTeam /> } />
      </Routes>
    </HashRouter>

  );
}
