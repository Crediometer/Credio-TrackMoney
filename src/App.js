import './App.css';
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
    </div>
  );
}

export default App;
