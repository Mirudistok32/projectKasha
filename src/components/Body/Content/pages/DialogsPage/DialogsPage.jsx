import React from 'react'
import s from './DialogsPage.module.scss'
import { setmainTitleAc } from './../../../../../bll/item-reducer'
import { connect } from 'react-redux'

const DialogsPage = ({ setmainTitleAc }) => {


    return (
        <div className={s.dialogs}>
            <iframe
                src={'https://mirudistok32.github.io/SamuraiWayIncrement/#/main'}
                className={s.iframe}
                title={'Increment'}
            />
        </div>
    )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    setmainTitleAc
}


export default connect(mapStateToProps, mapDispatchToProps)(DialogsPage)
