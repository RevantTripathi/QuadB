

import './App.css';
import  Home from './component/Home.js'
import {Provider} from 'react-redux';
import store from './store.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Home/>
    </div>
    </Provider>
  );
}

export default App;
