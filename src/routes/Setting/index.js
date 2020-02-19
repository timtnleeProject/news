import React from 'react'
import styles from './setting.module.css'
import store from '../../helper/store'

const countryStr = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za'
const countries = countryStr.split(' ')
export default function () {
  return (
    <div>
      <h2>設定</h2>
      <div className={styles.section}>
        <div className={styles.title}>國家</div>
        <div className={styles['tags-wrap']}>
          {
            countries.map(country => {
              const className = store.get('setting').country === country
                ? styles.tag + ' ' + styles.active
                : styles.tag
              return (<div
                className={className}
                key={country}>{country}
              </div>
              )}
            )
          }
        </div>
      </div>
    </div>
  )
}
