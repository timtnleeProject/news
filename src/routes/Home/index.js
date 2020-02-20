import React from 'react'
import NewsList from '../../components/NewsList/index'
import Loading from '../../components/Loading/index'
import { getTopHeadlines } from '../../helper/data'

export default class Home extends React.Component {
  _isMounted = false
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    this._isMounted = true
    getTopHeadlines({ country: 'tw' })
      .then(news => {
        if (this._isMounted) {
          this.setState({
            list: news
          })
        }
      })
  }
  componentWillUnmount () {
    this._isMounted = false
  }
  render () {
    return (
      <div>
        {
          this.state.list.length === 0
            ? <Loading/>
            : <NewsList list={this.state.list}/>
        }
      </div>
    )
  }
}