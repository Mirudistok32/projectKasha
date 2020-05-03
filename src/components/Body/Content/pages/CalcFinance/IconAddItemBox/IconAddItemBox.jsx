import React from 'react'
import s from './IconAddItemBox.module.scss'
import cn from 'classnames'

const IconAddItemBox = ({ isVisible, setIsVisible }) => {
    return (
        <div className={cn(s.iconAddItemBox, { [s.visible]: !isVisible })}>
            <div className={cn(s.iconAddItem)}
                onClick={() => setIsVisible(false)} >Добавь новою статью: <span>+</span></div>
        </div>
    )
}

export default IconAddItemBox
