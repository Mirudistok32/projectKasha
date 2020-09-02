import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setmainTitleAc } from './../../../../../bll/item-reducer'
import s from './Home.module.scss'
import './../../../../../assets/fonts/robot/flaticon.css'
import SliderSlick from './SliderSlick/SliderSlick'

const Home = React.memo(({ setmainTitleAc }) => {

    useEffect(() => {
        setmainTitleAc('Project Kasha App');

    }, [setmainTitleAc])

    return (
        <section className={s.home} >
            <div className={s.wrapper}>
                <div className={s.container}>
                    <h1 className={s.title} >Привет</h1>
                    <h5>
                        <span>Project Kasha App</span>
                    - это мой SPA-полигон обучения.
                    Здесь я пишу различные приложения, для улучшения своих навыков программирования.
                    </h5>
                    <div className={s.security}>
                        <span className={s.securityLeft} title="Марк" ></span>
                        <h2>{`<= Охрана сайта =>`}</h2>
                        <span className={s.securityRight} title="Грэд" ></span>
                    </div>
                    <SliderSlick />
                </div>
                <footer className={s.footer}>
                    <a href="https://github.com/Mirudistok32" target="_blank" rel="noopener noreferrer">by Stanislav Postnikov</a>
                </footer>
            </div>
        </section>
    )
})

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { setmainTitleAc })(Home)
