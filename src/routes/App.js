import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Containers/Layout";
import Home from "../Containers/Home";
import Login from "../Containers/Login";
import Register from "../Containers/Register";
import NotFound from "../Containers/NotFound";

//4.-Verificamos que el primer elemento que hace render es home, nos redireccionamos a home.

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
