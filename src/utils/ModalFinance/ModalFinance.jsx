import React from 'react'
import s from './ModalFinance.module.scss'
import ModalFinanceForm from './ModalFinanceForm/ModalFinanceForm'
import cn from 'classnames'

const ModalFinance = ({ setIsVisible, setNewSettingsAC }) => {

    const setVisible = (e) => {
        const target = e.target;

        if (target.className === s.modalFinance || target.className === s.close) {
            setIsVisible(false);
        }
    }

    return (
        <div
            className={
                cn(
                    s.modalFinance,
                )
            }
            onClick={setVisible}
        >
            <div className={s.box}>
                <div className={s.close}>X</div>
                <ModalFinanceForm setNewSettingsAC={setNewSettingsAC} setIsVisible={setIsVisible} />
            </div>
        </div>
    )
}

export default ModalFinance
