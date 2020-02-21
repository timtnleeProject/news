import React from 'react';
import { getEverything } from '../../helper/data'
import store from '../../helper/store'
import Loading from '../../components/Loading'
import NewsList from '../../components/NewsList'
import styles from './explore.module.css'

export default class Explore extends React.Component {
  _isMounted = false
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      q: ''
    }
    this.handleQuery = this.handleQuery.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
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
  handleKeydown (e) {
    if (e.keyCode === 13) {
      this.search()
    }
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
          <input
            value={this.state.q}
            className={styles.input}
            onChange={this.handleQuery}
            onKeyDown={this.handleKeydown}
          ></input>
          <button
            className={styles.btn}
            onClick={this.search}
          >搜尋</button>
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
