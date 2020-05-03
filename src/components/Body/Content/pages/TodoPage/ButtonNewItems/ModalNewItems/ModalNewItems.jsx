import React from "react";
import s from "./ModalNewItems.module.scss";
import { Formik } from 'formik'
import * as Yup from 'yup'
import ErrorModal from './../../../../../../../utils/ErrorModal/ErrorModal'

const ModalNewItems = React.memo(({ addNewItemAc, isModalWindowAddItemAc }) => {

  const isModalWindowAddItem = (e) => {
    const target = e.target;

    if (target.className === s.modalNewItems || target.className === s.close) {
      isModalWindowAddItemAc();
    }
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(1, "Минимальное к-во символов 1")
      .max(100, "Максимальное к-во букв 100")
      .required("Введение загаловка обязательно!"),
    text: Yup.string()
      .min(1, "Минимальное к-во символов 1")
      .max(300, "Максимальное к-во букв 300")
  })

  return (
    <div className={s.modalNewItems} onClick={isModalWindowAddItem} >
      <Formik
        initialValues={{ title: "", text: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addNewItemAc(values.title, values.text);
          resetForm();
          isModalWindowAddItemAc();
        }}
      >
        {
          ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (

            <form className={s.modalNewItemsWindow} onSubmit={handleSubmit}>
              <div className={s.inputRow}>
                <label htmlFor="title">Введите название:</label>
                <input
                  name="title"
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.title && errors.title && s.error}
                />
                <ErrorModal touched={touched.title} message={errors.title} />
              </div>
              <div className={s.inputRow}>
                <label htmlFor="text">Введите описание: <i>(Не обязательно)</i> </label>
                <textarea
                  name="text"
                  id="text"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.text && s.error}
                />
                <ErrorModal touched={touched.text} message={errors.text} />
              </div>
              <button className={`${s.send}`} type="submit">Отправить</button>
              <div className={s.close}>X</div>
            </form>
          )
        }
      </Formik>
    </div>
  );
})

export default ModalNewItems;


