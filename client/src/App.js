import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Figures from './components/Figures'
import Boards from './components/Boards'
import NewBoardForm from './components/NewBoardForm'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/figures" component={Figures}/>
            <Route path="/boards" component={Boards}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App