import React from 'react'
import Slider from 'react-slick'
import s from './SliderSlick.module.scss'
import { connect } from 'react-redux'

const SliderSlick = ({ aphorisms }) => {


    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={s.sliderSlick}>
            <Slider {...settings} >
                {
                    aphorisms.map(item => <div key={item.id} className={s.item}>{item.text}<span>{item.author}</span></div>)
                }
            </Slider>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        aphorisms: state.aphorismsReducer.aphorisms
    }
}

export default connect(mapStateToProps, {})(SliderSlick);

