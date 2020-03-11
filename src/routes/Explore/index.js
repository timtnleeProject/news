import React from 'react';
import { getEverything } from '../../helper/data'
import store from '../../helper/store'
import Loading from '../../components/Loading'
import NewsList from '../../components/NewsList'
import styles from './explore.module.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default class Explore extends React.Component {
  _isMounted = false
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      q: ''
    }
    this.handleQuery = this.handleQuery.bind(this)
    this.search = this.search.bind(this)
  }
  componentDidMount () {
    this._isMounted = true
    const params = store.get('params')
    getEverything(params).then(list => {
      if (this._isMounted) {
        this.setState({
          list
        })
      }
    })
  }
  componentWillUnmount () {
    this._isMounted = false
  }
  handleQuery (e) {
    this.setState({
      q: e.target.value
    })
  }
  search () {
    if (!this.state.q) return
    this.setState({
      list: []
    })
    getEverything({ q: this.state.q }).then(list => {
      this.setState({
        list
      })
    })
  }
  render () {
    return (
      <>
        <div className={styles['search-bar']}>
          <TextField
            value={this.state.q}
            id="search-text"
            label="Standard"
            className={styles.input}
            onChange={this.handleQuery}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.search}
            className="m-l"
          >搜尋</Button>
        </div>
        {
          this.state.list.length === 0
            ? <Loading/>
            : <NewsList list={this.state.list}/>
        }
      </>
    )
  }
}
