import React, { useMemo } from 'react';
import styles from './news.module.css'

function News (props) {
  const {
    title,
    link,
    author,
    published_date,
    summary,
  } = props;
  const openLink = () => {
    window.open(link, '_blank')
  }
  const info = [props.rights]
  if (author) info.push(author)
  const date = useMemo(() => published_date
    ? new Date(published_date).toLocaleString()
    : null, [published_date]) 
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
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          <span>{info.join('/')}</span>
          <span>{date}</span>
        </div>
        <div className={styles.description}>{summary}</div>
      </div>
    </div>
  )
}

export default function NewsList (props) {
  const news = props.list.map((item, i) => (
    <News
      {...item}
      key={i}
    />
  ))
  return (
    <div>
      {news}
    </div>
  )
}