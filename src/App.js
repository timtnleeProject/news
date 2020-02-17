import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react'
import './App.css';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/News'));

const AppHeader = () => (
  <div className="AppHeader">
    <div className="AppHeader-logo">Title</div>
  </div>
)

const AppContent = () => (
  <div className="App-content">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={About}/>
        </Switch>
      </Suspense>
    </Router>
  </div>
)

const AppFooter = () => (
  <div className="AppFooter">
    <span>Free API: </span>
    <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NEWS API</a>
  </div>
)

const App = () => (
  <div>
    <AppHeader/>
    <AppContent/>
    <AppFooter/>
  </div>
)

export default App;
