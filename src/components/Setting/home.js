import React, { useState } from 'react'
import styles from './setting.module.css'
import store from '../../helper/store'
import classnames from 'classnames'

const countryStr = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za'
const countries = countryStr.split(' ')
const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

const Tag = props => {
  const tagClass = classnames(styles.tag, {
    [styles['tag--wide']]: props.wide,
    [styles.active]: props.active
  })
  return(
    <div
      className={tagClass}
      onClick={props.onTagSelect}
    >
      {props.value}
    </div>
  )
}

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
        <div className={styles.title}>國家</div>
        <div className={styles['tags-wrap']}>
          {
            countries.map(c => {
              const active = country === c
              return (
                <Tag
                  value={c}
                  active={active}
                  key={c}
                  onTagSelect={handleTagSelect.bind(this, 'country', c)}
                ></Tag>
              )}
            )
          }
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>類別</div>
        <div className={styles['tags-wrap']}>
          {
            categories.map(c => {
              const active = category === c
              return (
                <Tag
                  value={c}
                  active={active}
                  key={c}
                  wide
                  onTagSelect={handleTagSelect.bind(this, 'category', c)}
                ></Tag>
              )}
            )
          }
        </div>
      </div>
    </div>
  )
}
