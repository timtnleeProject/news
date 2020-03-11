import React from 'react'
import NewsList from '../../components/NewsList'
import Loading from '../../components/Loading'
import Setting from '../../components/Setting/home'
import SettingBar from './SettingBar'
import { getTopHeadlines } from '../../helper/data'
import store from '../../helper/store'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade';

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

  toggleModal () {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  save () {
    const stateAfter = {}
    const { category, country } = this.state.setting
    const localSetting = store.get('setting')
    if (category !== localSetting.category || country !== localSetting.country) {
      stateAfter.setting = localSetting
      stateAfter.list = []
      this.getTopHeadlines()
    }
    this.toggleModal()
    this.setState(stateAfter)
  }
  render () {
    const { category, country } = this.state.setting
    return (
      <div>
        <SettingBar
          onClick={this.toggleModal.bind(this)}
          setting={{ category, country }}
        />
        {
          this.state.list.length === 0
            ? <Loading/>
            : <NewsList list={this.state.list}/>
        }
        <Modal
          open={this.state.modalOpen}
          onClose={this.toggleModal.bind(this)}
        >
          <Fade in={this.state.modalOpen}>
            <div style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              width: '80vw',
              maxWidth: '600px',
              backgroundColor: 'white',
              padding: '10px'
            }}>
              <Setting></Setting>
              <div style={{float: 'right'}}>
                <Button variant="contained" className="m-r" onClick={this.toggleModal.bind(this)}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={this.save.bind(this)}>Save</Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    )
  }
}