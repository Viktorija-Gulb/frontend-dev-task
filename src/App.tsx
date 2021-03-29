import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Members from './pages/Members';
import './App.scss';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-container">
        <Switch>
          <Route path="/members" exact component={Members} />
          <Route path="/about" exact component={About} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
