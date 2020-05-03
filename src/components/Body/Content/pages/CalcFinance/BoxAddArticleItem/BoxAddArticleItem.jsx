import React, { useState } from 'react'
import s from './BoxAddArticleItem.module.scss'
import cn from 'classnames'
import { Formik } from 'formik'
import * as Yup from 'yup'
import ErrorModal from './../../../../../../utils/ErrorModal/ErrorModal'

const BoxAddArticleItem = ({ isVisible, setIsVisible, setNewCalcItemAc }) => {


    const validationSchema = Yup.object().shape({
        text: Yup.string()
            .min(1, "Минимальное к-во символов 1")
            .max(50, "Максимальное к-во букв 50")
            .required('Обязательное поле для добавления статьи!'),
        number: Yup.number()
            .required('Обязательное поле для добавления статьи!'),
    })


    return (
        <Formik
            initialValues={{ text: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                setNewCalcItemAc(values.text, values.number)
                resetForm()

            }}
        >
            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (

                    <form className={
                        cn(
                            s.addArticle,
                            { [s.visible]: isVisible }
                        )
                    }
                        onSubmit={handleSubmit}
                    >
                        <input
                            name="text"
                            id="text"
                            placeholder="Введите название статьи"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={cn({ [s.error]: touched.text && errors.text })}
                        />
                        <ErrorModal touched={touched.text} message={errors.text} />
                        <div className={s.box}>
                            <div className={s.boxInner}>
                                <input
                                    name="number"
                                    id="number"
                                    className={s.input}
                                    placeholder="Введите сумму"
                                    value={values.number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={cn({ [s.error]: touched.number && errors.number })}
                                />
                                <ErrorModal touched={touched.number} message={errors.number} />
                            </div>
                            <button className={s.btn}
                                onClick={() => setIsVisible(true)}
                                type="submit"
                            >Добавь</button>
                        </div>
                    </form>
                )
            }
        </Formik>
    )
}

export default BoxAddArticleItem
