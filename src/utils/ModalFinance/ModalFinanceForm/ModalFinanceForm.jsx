import React from 'react'
import s from './ModalFinanceForm.module.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'
import ErrorModal from './../../ErrorModal/ErrorModal'

const ModalFinanceForm = ({ setNewSettingsAC, setIsVisible }) => {

    const validationSchema = Yup.object().shape({
        number: Yup.number()
            .max(100000000, 'Максимальное значение 100000000')
            .min(0, "Минимальное значение 0")
            .required('Обязательное поле для добавления')
    })

    return (
        <div className={s.modalFinanceForm}>
            <Formik initialValues={{ number: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    setNewSettingsAC(values.number);
                    resetForm();
                    setIsVisible(false)
                }}
            >
                {
                    ({ values, touched, errors, handleSubmit, handleChange, handleBlur }) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="number">Введите ваш бюджет</label>
                            <input
                                type="text"
                                name="number"
                                id="number"
                                values={values.number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Бюджет"
                                className={cn({ [s.error]: touched.number && errors.number })}
                            />
                            <ErrorModal touched={touched.number} message={errors.number} />
                            <button type="submit">заполнить</button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}

export default ModalFinanceForm
