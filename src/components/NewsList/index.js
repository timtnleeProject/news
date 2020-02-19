import React from 'react';
import styles from './news.module.css'

function News (props) {
  const openLink = () => {
    window.open(props.url, '_blank')
  }
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
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  )
}

export default function NewsList (props) {
  const news = props.list.map(item => (
    <News
      title={item.title}
      description={item.description}
      url={item.url}
      image={item.urlToImage}
      key={item.url}
    />
  ))
  return (
    <div>
      {news}
    </div>
  )
}