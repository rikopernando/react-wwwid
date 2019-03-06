import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../pages/Home'

const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
      <div>
          <Header />
          <Switch>
              <Route path="/" component={HomePage} exact={true}/>
          </Switch>
      </div>
  </Router>
)

export default AppRouter


