import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/user-management/login';
import AddUser from './components/user-management/add-user';
import Buy from './components/game/buy'
import Sell from './components/game/sell'
import Menu from './components/game/menu'
import Play from './components/game/play'
import './lib/Semantic-UI-CSS-master/semantic.min.css'
import globalReducer from './reducers/globalReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

const store = createStore(globalReducer)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentCard: null
    }
  }


  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="container-fluid">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/adduser">
                <AddUser />
              </Route>
              <Route path="/menu">
                <Menu />
              </Route>
              <Route path="/buy">
                <Buy />
              </Route>
              <Route path="/sell">
                <Sell />
              </Route>
              <Route path="/play">
                <Play />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
export const history = createBrowserHistory();