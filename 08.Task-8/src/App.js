import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import LogInPage from './Pages/LogInPage';
import AuthContext, { userContext } from './Context/AuthContext';

function App() {
  return (
    <div className='App'>
      <AuthContext>
        <Navbar />
        <div className="row">
          <div className="col-10 m-auto mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='login' element={<LogInPage />} />
            </Routes>
          </div>
        </div>
      </AuthContext>
    </div>
  );
}

export default App;
