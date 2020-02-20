import { BrowserRouter as Router, Route, Switch, NavLink, withRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react'
import CONFIG from './config'
import styles from './App.module.css'
import Loading from './components/Loading'

const Home = lazy(() => import('./routes/Home'));
const Setting = lazy(() => import('./routes/Setting'));
const Explore = lazy(() => import('./routes/Explore'))

const AppHeader = () => (
  <div className={styles.header}>
    <div className={styles['header__trend']}>Local News</div>
    <div className={styles['header__info']}>
      <span>Thanks for: </span>
      <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NEWS API</a>
    </div>
  </div>
)

const routes = [{
  path: '/',
  name: '焦點',
  component: Home,
  exact: true
}, {
  path: '/explore',
  name: '探索',
  component: Explore,
  exact: true
}, {
  path: '/setting',
  name: '設定',
  component: Setting,
  exact: true
}]


const AppContent = props => {
  const currentRoute = routes.find(route => route.path === props.location.pathname)
  return (
    <div className={styles.content}>
      <div className={styles.page}>
        <Suspense fallback={ <Loading/> }>
          <h2>{currentRoute.name}</h2>
          <Switch>
            {
              routes.map(route => {
                const { exact, path, component } = route
                return (
                  <Route
                    key={path}
                    exact={exact}
                    path={path}
                    component={component}
                  />)
              })
            }
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}
const AppContentWithRoute = withRouter(AppContent)

const AppFooter = () => (
  <div className={styles.footer}>
    <div className={styles['footer__tabs']}>
      {
        routes.map(route => {
          const { path, name, exact } = route
          return (
            <NavLink
              key={name}
              to={path}
              exact={exact}
              className={styles['footer__tab']}
              activeClassName={styles.active}
            >
              {name}
            </NavLink>
          )
        })
      }
    </div>
  </div>
)

const App = () => (
  <div>
    <Router basename={CONFIG.baseUrl}>
      <AppHeader/>
      <AppContentWithRoute/>
      <AppFooter/>
    </Router>
  </div>
)

export default App;
