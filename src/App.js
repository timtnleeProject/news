import { BrowserRouter as Router, Route, Switch, NavLink, withRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react'
import CONFIG from './config'
import styles from './App.module.css'
import Loading from './components/Loading'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Home = lazy(() => import('./routes/Home'));
const Explore = lazy(() => import('./routes/Explore'))

const AppHeader = () => (
  <AppBar>
    <Toolbar>
      <Typography className={styles['header__trend']}>Local News</Typography>
      <Typography className={styles['header__tabs']}>
        {
          routes.map(route => {
            const { path, name, exact } = route
            return (
              <NavLink
                key={name}
                to={path}
                exact={exact}
                className={styles['header__tab']}
                activeClassName={styles.active}
              >
                {name}
              </NavLink>
            )
          })
        }
      </Typography>
    </Toolbar>
  </AppBar>
)

const routes = [{
  path: '/',
  name: 'Headlines',
  component: Home,
  exact: true
}, {
  path: '/explore',
  name: 'Explore',
  component: Explore,
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
    <div className={styles['footer__info']}>
      <span>Thanks for: </span>
      <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NEWS API</a>
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
