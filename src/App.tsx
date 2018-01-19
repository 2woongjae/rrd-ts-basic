import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from 'react-router-dom';
import './App.css';

const Links = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/hello/">Hello</Link>
    <Link to="/world">World</Link>
    <Link to="/world/Mark">World/Mark</Link>
    <Link to="/children">children</Link>
  </div>
);

const Home = () => <h2>Home</h2>;
const Hello = () => <h2>Hello</h2>;
const World = () => <h2>World</h2>;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Route exact={true} path="/" component={Home} />
          <Route strict={true} path="/hello/" component={Hello} />
          <Route exact={true} path="/world" component={World} />
          <Route
            path="/world/:name"
            render={(props: RouteComponentProps<{ name: string }>) => {
              console.log(props.match.params.name);
              return <h2>{props.match.params.name}</h2>;
            }}
          />
          <Route
            path="/children"
            children={(props: RouteComponentProps<{}>) => {
              return props.match && <h2>{JSON.stringify(props.match)}</h2>;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
