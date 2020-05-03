import React from 'react'
import s from './ItemCalc.module.scss'
import cn from 'classnames'

const ItemCalc = ({ text, number }) => {


    return (
        <div className={
            cn
                (
                    s.itemCalc,
                    { [s.red]: (number < 0) },
                    { [s.green]: (number > 0) }
                )
        }>
            <div className={s.text}>{text}</div>
            <div className={s.number}>{number}</div>
        </div>
    )
}

export default ItemCalc
