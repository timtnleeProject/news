import React from 'react'
import NewsList from '../../components/NewsList/index'
import Loading from '../../components/Loading/index'
import { getTopHeadlines } from '../../helper/api'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    getTopHeadlines({ country: 'tw' })
      .then(news => {
        this.setState({
          list: news
        })
      })
  }
  render () {
    return (
      <div>
        <h2>焦點新聞</h2>
        {
          this.state.list.length === 0
            ? <Loading/>
            : <NewsList list={this.state.list}/>
        }
      </div>
    )
  }
}