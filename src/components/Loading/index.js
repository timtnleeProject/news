import React from 'react';
import styles from './loading.module.css'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function Loading () {
  return (
    <div className={styles.loading}>
      <CircularProgress></CircularProgress>
    </div>
  )
}
