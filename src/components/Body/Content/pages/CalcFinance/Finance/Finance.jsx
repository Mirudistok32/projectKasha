import React from 'react'
import s from './Finance.module.scss'

const Finance = ({ total, income, expenses }) => {
    return (
        <div className={s.finance}>
            <div className={s.total}>Ваш капитал:<span>{total}</span></div>
            <div className={s.calculations}>
                <div className={s.income}>Доходы:<span>{income}</span></div>
                <div className={s.expenses}>Рассходы:<span>{expenses}</span></div>
            </div>
        </div>
    )
}

export default Finance
