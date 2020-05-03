import React, { useState } from 'react'
import s from './CalcFinanceFilter.module.scss'
import cn from 'classnames'
import ModalFinance from './../../../../../../utils/ModalFinance/ModalFinance'

const CalcFinanceFilter = ({ setFilterAC, filter, setNewSettingsAC }) => {

    const [isViseble, setIsVisible] = useState(false);

    const btn = [
        { id: "all", filter: "all", title: "Все" },
        { id: "income", filter: "income", title: "Доходы" },
        { id: "expenses", filter: "expenses", title: "Расходы" }
    ]


    return (
        <>
            <ul className={s.filter}>
                <button className={s.updateBtn} onClick={() => setIsVisible(true)} >Посчитать заново</button>
                {
                    isViseble && <ModalFinance setIsVisible={setIsVisible} setNewSettingsAC={setNewSettingsAC} />
                }
                <div className={s.box}>
                    {
                        btn.map(i => <li key={i.id} >
                            <button onClick={() => setFilterAC(i.filter)}
                                className={
                                    cn
                                        (
                                            { [s.active]: i.filter === filter }
                                        )
                                }
                            >{i.title}</button>
                        </li>)
                    }
                </div>
            </ul>
        </>
    )
}

export default CalcFinanceFilter
