import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Home from './Home';

const store = createStore(reducers)

class App extends Component {

  render() {    
    return(
      <Provider store={store}>
        <Home/>
      </Provider>
    )
  }
}

export default App;