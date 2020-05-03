import React, { useEffect, useState } from 'react'
import s from './CalcFinance.module.scss'
import { connect } from 'react-redux'
import { setmainTitleAc } from './../../../../../bll/item-reducer'
import { setFilterAC, setNewCalcItemAc, setNewSettingsAC } from './../../../../../bll/calcFinance-reducer'
import cn from 'classnames'
import ItemCalc from './ItemCalc/ItemCalc'
import CalcFinanceFilter from './CalcFinanceFilter/CalcFinanceFilter'
import BoxAddArticleItem from './BoxAddArticleItem/BoxAddArticleItem'
import IconAddItemBox from './IconAddItemBox/IconAddItemBox'
import Finance from './Finance/Finance'

const CalcFinance = ({
    setmainTitleAc,
    setFilterAC,
    setNewCalcItemAc,
    setNewSettingsAC,
    total,
    income,
    expenses,
    items,
    filter }) => {

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setmainTitleAc('CalcF');

    }, [])

    const filterItems = (arr, filters) => {
        switch (filters) {
            case "income": {
                return arr.filter(i => (i.number > 0))
            }
            case "expenses": {
                return arr.filter(i => (i.number < 0))
            }
            case "all": {
                return arr
            }
            default: return arr;
        }
    }

    const localStor = (arr) => {
        localStorage.setItem('calcFinanceData', JSON.stringify(arr))
        return JSON.parse(localStorage.getItem('calcFinanceData'));
    }

    return (
        <section className={s.calcFinance}>
            <div className={s.container}>
                <h1 className={s.header}>Калькулятор расходов</h1>
                <Finance total={total} expenses={expenses} income={income} />
                <CalcFinanceFilter setFilterAC={setFilterAC} filter={filter} setNewSettingsAC={setNewSettingsAC} />
                <h3>История рассходов</h3>
                <section className={s.list}>
                    {
                        localStor(filterItems(items, filter)).map(i => <ItemCalc key={i.text} text={i.text} number={i.number} />)
                    }
                </section>
                <BoxAddArticleItem setIsVisible={setIsVisible} isVisible={isVisible} setNewCalcItemAc={setNewCalcItemAc} />
                <IconAddItemBox setIsVisible={setIsVisible} isVisible={isVisible} />
            </div>
        </section >
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.calcFinanceReducer.total,
        income: state.calcFinanceReducer.income,
        expenses: state.calcFinanceReducer.expenses,
        items: state.calcFinanceReducer.items,
        filter: state.calcFinanceReducer.filter
    }
}

export default connect(mapStateToProps, {
    setmainTitleAc,
    setFilterAC,
    setNewCalcItemAc,
    setNewSettingsAC
})(CalcFinance)
