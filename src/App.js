import './App.css';
import Routing from './Routes';
import { Provider } from 'react-redux';
import rootReducer from './Pages/Reducers/index'


function App() {
  return (
    <Provider store={rootReducer}>
      <Routing />
    </Provider>
  );
}

export default App;
