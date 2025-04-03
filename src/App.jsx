
import './App.css';
import Body from "./components/Body";
import Head from './components/Head';
import { Provider } from 'react-redux'
import store from './utils/Store'

function App() {

  return (
  
    <Provider store={store}>
      <Head/>
      <Body/>
    </Provider>
   
  )
}

export default App
