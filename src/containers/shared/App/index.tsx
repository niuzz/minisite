import * as React from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import { hot } from "react-hot-loader";

function Loading() {
  return <div>Loading</div>;
}

const Home = Loadable({
  loader: () => import("@views/Home"),
  loading: Loading
});

const Page = Loadable({
  loader: () => import("@views/Page"),
  loading: Loading
});

@hot(module)
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Page" component={Page} />
        </Switch>
      </Router>
    );
  }
}

export default App;
