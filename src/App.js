
import './App.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
import { Provider } from 'react-redux';
import store from './Redux/Store';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Router/>
        </Provider>  
      </BrowserRouter>
     {/* <Login></Login> */}
     {/* <Dashboard/> */}
    </div>
  );
}

export default App;
