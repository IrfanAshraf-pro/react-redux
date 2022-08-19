import './App.css'
import { Provider } from 'react-redux';
import store from './redux/Store';
import CakeContainer from './components/CakeContainer';
import HooksCakecontainer from './components/HooksCakecontainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCandyContainer from './components/HooksCandyContainer.jsx';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        {/* <CakeContainer /> */}
        {/* <ItemContainer />
        <ItemContainer cake/>
        <HooksCakecontainer />
        <IceCreamContainer />
        <HooksCandyContainer />
        <NewCakeContainer/> */}
        <UserContainer/>
      </div>
      </Provider>
  );
}

export default App;
