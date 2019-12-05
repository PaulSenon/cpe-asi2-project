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
import './lib/Semantic-UI-CSS-master/semantic.min.css'
import globalReducer from './reducers/globalReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

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
        <Router>
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
            </Switch>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;