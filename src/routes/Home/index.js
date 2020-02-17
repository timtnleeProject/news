import React from 'react'
import './news.css'
import { getTopHeadlines } from '../../helper/news'

function News (props) {
  return (
    <div className="News">
      <div className="News-title">{props.title}</div>
      <div className="News-description">{props.description}</div>
    </div>
  )
}

function NewsList (props) {
  const news = props.list.map(item => (
    <News
      title={item.title}
      description={item.description}
      key={item.url}
    />
  ))
  return (
    <div className="NewsList">
      {news}
    </div>
  )
}

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    getTopHeadlines({ country: 'us' })
      .then(news => {
        this.setState({
          list: news
        })
      })
  }
  render () {
    return (
      <div>
        <div>Home</div>
        <NewsList list={this.state.list}/>
      </div>
    )
  }
}