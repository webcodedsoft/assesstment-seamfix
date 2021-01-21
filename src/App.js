import React from 'react';
import { withRouter } from 'react-router'
import { Route, Switch } from "react-router-dom";
import NavBar from './components/layouts/NavBar';
import Index from './components/dashboard/Index';
import Footer from './components/layouts/Footer';
import Server from './components/dashboard/Server';
import Application from './components/dashboard/Application';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/server" exact component={Server} />
        <Route path="/application" exact component={Application} />
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(App);
