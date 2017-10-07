import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLink from './NavLink';

import Home from './Components/Home';
import History from './Components/history';
import Workshop2017 from './Components/2017';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'History',
  to: '/history',
  icon: 'donut_large',
}, {
  label: 'Workshop 2017',
  to: '/2017',
  icon: 'bookmark',
}];

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
          drawerTitle="USAPPS"
          toolbarTitle="Welcome to USAPPS!"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/history" location={location} component={History} />
              <Route path="/2017" location={location} component={Workshop2017} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}

export default App;
