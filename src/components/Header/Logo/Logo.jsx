import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Logo.module.scss'
import cn from 'classnames'
import { connect } from 'react-redux'

const Logo = () => {

    return (
        <NavLink to="/" className={s.logo} title="Mirudistok">
            <div>
                <p className={cn(s.m)}>M</p>
                <p className={cn(s.k)}>k</p>
            </div>
        </NavLink>

    )
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(Logo)
