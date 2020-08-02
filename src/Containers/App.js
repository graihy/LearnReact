import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from '../Components/Layout/Layout';
import Home from '../Components/Home/Home';
import NotFound from '../Components/ErrorPages/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;