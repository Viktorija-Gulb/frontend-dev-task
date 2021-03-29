import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About';
import MembersPage from './pages/MembersPage';
import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-container">
        <Switch>
          <Route path="/" exact component={MembersPage} />
          <Route path="/about" exact component={About} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
