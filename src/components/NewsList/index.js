import React from 'react';
import styles from './news.module.css'

function News (props) {
  const openLink = () => {
    window.open(props.url, '_blank')
  }
  const info = [props.source.name]
  if (props.author) info.push(props.author)
  const date = props.publishedAt
    ? new Date(props.publishedAt).toLocaleString()
    : null
  return (
    <div
      className={styles.item}
      onClick={openLink}
    >
      { props.image
        ? (
          <div
            className={styles.image}
            style={{backgroundImage: `url(${props.image})`}}
          ></div>
        )
        : null
      }
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.info}>
          <span>{info.join('/')}</span>
          <span>{date}</span>
        </div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  )
}

export default function NewsList (props) {
  const news = props.list.map((item, i) => (
    <News
      title={item.title}
      description={item.description}
      url={item.url}
      source={item.source}
      author={item.author}
      publishedAt={item.publishedAt}
      image={item.urlToImage}
      key={i}
    />
  ))
  return (
    <div>
      {news}
    </div>
  )
}