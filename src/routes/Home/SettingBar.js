import React from 'react';
import styles from './home.module.css';

export default function Setting (props) {
  const { country, category } = props.setting
  return (
    <div className={styles.setting} onClick={props.onClick}>
      <div className={styles['setting__row']}>
        <label>國家</label>
        <div>{country}</div>
      </div>
      <div className={styles['setting__row']}>
        <label>類別</label>
        <div>{category}</div>
      </div>
    </div>
  )
}
