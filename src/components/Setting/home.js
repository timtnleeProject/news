import React, { useState } from 'react'
import styles from './setting.module.css'
import store from 'helper/store'
import Chip from '@material-ui/core/Chip'

const countryStr = 'af ar bg bn ca cn cs cy da de el en es et fa fi fr gu he hi hr hu id it ja kn ko lt lv mk ml mr ne nl no pa pl pt ro ru sk sl so sq sv sw ta te th tl tr tw uk ur vi'
const countries = countryStr.split(' ')
const categories = ['news', 'sport', 'tech', 'world', 'finance', 'politics', 'business', 'economics', 'entertainment']

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
        <div className={styles.title}>language</div>
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
