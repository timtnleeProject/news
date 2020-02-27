import React from 'react'
import NewsList from '../../components/NewsList'
import Modal from '../../components/Modal'
import Loading from '../../components/Loading'
import Setting from '../../components/Setting/home'
import SettingBar from './SettingBar'
import { getTopHeadlines } from '../../helper/data'
import store from '../../helper/store'

export default class Home extends React.Component {
  _isMounted = false
  constructor (props) {
    super(props)
    const setting = store.get('setting')
    this.state = {
      list: [],
      modalOpen: false,
      setting
    }
  }
  componentDidMount () {
    this._isMounted = true
    this.getTopHeadlines()
  }
  componentWillUnmount () {
    this._isMounted = false
  }

  getTopHeadlines () {
    getTopHeadlines()
      .then(news => {
        if (this._isMounted) {
          this.setState({
            list: news
          })
        }
      })
  }

  toggleModal (status) {
    const stateAfter = { modalOpen: status }
    if (!status) {
      const { category, country } = this.state.setting
      const localSetting = store.get('setting')
      if (category !== localSetting.category || country !== localSetting.country) {
        stateAfter.setting = localSetting
        stateAfter.list = []
        this.getTopHeadlines()
      }
    }
    this.setState(stateAfter)
  }
  render () {
    const { category, country } = this.state.setting
    return (
      <div>
        <SettingBar
          onClick={this.toggleModal.bind(this, true)}
          setting={{ category, country }}
        />
        {
          this.state.list.length === 0
            ? <Loading/>
            : <NewsList list={this.state.list}/>
        }
        <Modal
          open={this.state.modalOpen}
          onClose={this.toggleModal.bind(this, false)}
        >
          <Setting></Setting>
        </Modal>
      </div>
    )
  }
}