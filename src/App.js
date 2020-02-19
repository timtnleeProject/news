import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react'
import CONFIG from './config'
import styles from './App.module.css'

const Home = lazy(() => import('./routes/Home'));
const Setting = lazy(() => import('./routes/Setting'));

const AppHeader = () => (
  <div className={styles.header}>
    <div className={styles['header__trend']}>Local News</div>
    <div className={styles['header__info']}>
      <span>Thanks for: </span>
      <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NEWS API</a>
    </div>
  </div>
)

const AppContent = () => (
  <div className={styles.content}>
    <div className={styles.page}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/setting" component={Setting}/>
        </Switch>
      </Suspense>
    </div>
  </div>
)

const AppFooter = () => (
  <div className={styles.footer}>
    <div className={styles['footer__tabs']}>
      <Link to="/" className={styles['footer__tab']}>焦點</Link>
      <button className={styles['footer__tab']}>搜尋</button>
      <Link to="/setting" className={styles['footer__tab']}>設定</Link>
    </div>
  </div>
)

const App = () => (
  <div>
    <Router basename={CONFIG.baseUrl}>
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </Router>
  </div>
)

export default App;
