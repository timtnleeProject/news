import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import classnames from 'classnames'
import styles from './modal.module.css'

export default function Modal (props) {
  const modalBody = React.createRef()
  useEffect(() => {
    if (props.open) {
      modalBody.current.focus()
    }
  });

  const handleBlur = () => {
    props.onClose()
  }
  const modalClass = classnames([styles.modal, { [styles.show]: props.open }])
  return ReactDom.createPortal(
    (<div className={modalClass}>
      <div
        className={styles['modal__body']}
        tabIndex="1"
        ref={modalBody}
        onBlur={handleBlur}
      >
        {props.children}
      </div>
    </div>),
    document.body
  )
}
