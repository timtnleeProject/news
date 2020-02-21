import React from 'react'
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

export default class Setting extends React.Component {
  constructor (props) {
    super(props)
    const setting = store.get('setting')
    this.state = {
      country: setting.country,
      category: setting.category
    }
  }
  
  handleTagSelect (type, value) {
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
    this.setState({
      [type]: value
    })
  }
  render () {
    return (
      <div>
        <div className={styles.section}>
          <div className={styles.title}>國家</div>
          <div className={styles['tags-wrap']}>
            {
              countries.map(country => {
                const active = this.state.country === country
                return (
                  <Tag
                    value={country}
                    active={active}
                    key={country}
                    onTagSelect={this.handleTagSelect.bind(this, 'country', country)}
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
              categories.map(category => {
                const active = this.state.category === category
                return (
                  <Tag
                    value={category}
                    active={active}
                    key={category}
                    wide
                    onTagSelect={this.handleTagSelect.bind(this, 'category', category)}
                  ></Tag>
                )}
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
