import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidenav from './Sidenav.jsx';
import SinglePlant from './SinglePlant.jsx';
import Plants from './Plants.jsx';
import NewPlant from './NewPlant.jsx'


class Root extends Component {


  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Sidenav />
            <main>
              <Switch>
                <Route exact path="/plants" component={Plants} />
                <Route path="/plants/addForm" component={NewPlant} />
                <Route path="/plants/:id" component={SinglePlant} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    )
  }
}


export default Root;
