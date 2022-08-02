import './App.css';
import PermanentDrawerLeft from './pages/dashboard';
import Admin from './pages/params'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './utils/Store';

function App() {
  return (
    <StoreProvider>
      
      <Router>
          <Routes>
            <Route path="/" element={<PermanentDrawerLeft />} />
            <Route path="/params/:id" element={<Admin />}/>
          </Routes>
        </Router>
    </StoreProvider>
  );
}

export default App;
