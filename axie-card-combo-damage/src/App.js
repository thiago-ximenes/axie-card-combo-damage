import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AxiesTeam from './pages/AxiesTeam';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/axies-team" element={ <AxiesTeam /> } />
      </Routes>
    </BrowserRouter>

  );
}
