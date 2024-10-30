import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './layout/Login'
import Team1 from './team1/Index'
import Team2 from './team2/Index'
import Team3 from './team3/Index'
import Team4 from './team4/Index'
import Team5 from './team5/Index'
import Team6 from './team6/Index'
import MasterLayout from './layout/MasterLayout';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({ id: 0, username: 'guest', firstName: 'Зочин', role: { id: 0, name: "Зочин" } })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<Team1 />} />
            {user.role.id === 0 && <Route path="/login" element={<Login />} />}
            <Route path="/team1/*" element={<Team1 />} />
            <Route path="/team2/*" element={<Team2 />} />
            <Route path="/team3/*" element={<Team3 />} />
            <Route path="/team4/*" element={<Team4 />} />
            <Route path="/team5/*" element={<Team5 />} />
            <Route path="/team6/*" element={<Team6 />} />
            <Route path="*" element={<Team1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;