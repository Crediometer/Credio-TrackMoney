
import './App.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
     {/* <Login></Login> */}
     {/* <Dashboard/> */}
    </div>
  );
}

export default App;
