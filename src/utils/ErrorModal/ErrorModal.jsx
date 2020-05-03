import React from 'react'
import s from './ErrorModal.module.scss'

const ErrorModal = (props) => {
    if (!props.touched) {
        return <div className={`${s.errorModal} ${s.invalid}`}>&nbsp;</div>
    }
    if (props.message) {
        return <div className={`${s.errorModal} ${s.invalid}`}>({props.message})</div>
    }

    return <div className={`${s.errorModal} ${s.valid}`}></div>
}

export default ErrorModal;