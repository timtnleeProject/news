import React, { useState } from 'react'
import styles from './setting.module.css'
import store from '../../helper/store'
import Chip from '@material-ui/core/Chip'

const countryStr = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za'
const countries = countryStr.split(' ')
const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

export default function Setting () {
  const setting = store.get('setting')
  const [country, setCountry] = useState(setting.country);
  const [category, setCategory] = useState(setting.category);
  const handleTagSelect = (type, value) => {
    const setting = store.get('setting')
    if (setting[type] === value) return
    store.remove('headlines')
    store.save({
      key: 'setting',
      value: {
        ...setting,
        [type]: value
      }
    })
    if (type === 'country') setCountry(value)
    else setCategory(value)
  }
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.title}>country</div>
        <div className={styles['tags-wrap']}>
          {
            countries.map(c => {
              const active = country === c
              return (
                <Chip
                  className={styles.tag}
                  onClick={handleTagSelect.bind(this, 'country', c)}
                  label={c}
                  key={c}
                  color={active ? 'primary' : 'default'}
                />
              )}
            )
          }
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>category</div>
        <div className={styles['tags-wrap']}>
          {
            categories.map(c => {
              const active = category === c
              return (
                <Chip
                  className={styles.tag}
                  onClick={handleTagSelect.bind(this, 'category', c)}
                  label={c}
                  key={c}
                  color={active ? 'primary' : 'default'}
                />
              )}
            )
          }
        </div>
      </div>
    </div>
  )
}
