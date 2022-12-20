import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SportCompetitions from './pages/sports';
import BasketballCompetition from './pages/competitions/basketball';
import Flights from './pages/flights';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<SportCompetitions/>}></Route>

          <Route path="/basketballCompetition" element={<BasketballCompetition/>}></Route>
          <Route path="/volleyballCompetition" element={<BasketballCompetition/>}></Route>
          <Route path="/baseballCompetition" element={<BasketballCompetition/>}></Route>

          <Route path="/flights" element={<Flights/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
