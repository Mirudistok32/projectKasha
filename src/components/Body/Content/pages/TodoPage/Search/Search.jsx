import React from "react";
import s from "./Search.module.scss";

const Search = ({ searchLabel, onChangeSearchLabel, setFilterSearchAc, filterSearch }) => {

  const onChangeSearchLabelLocal = (e) => {
    const target = e.target;
    onChangeSearchLabel(target.value)
  }

  const onClickSetFilterSearch = (filter) => {
    setFilterSearchAc(filter);
  }

  const buttons = [
    { filter: 'all', label: 'Все' },
    { filter: 'active', label: 'Активные' },
    { filter: 'important', label: 'Важные' },
    { filter: 'done', label: 'Завершенные' },
  ]

  return (
    <section className={s.search}>
      <input type="text" placeholder="Поиск todo" value={searchLabel} onChange={onChangeSearchLabelLocal} />
      <ul>
        {
          buttons.map(i => <li key={i.filter} >
            <button
              className={`${(i.filter === filterSearch) && s.active}`}
              onClick={() => onClickSetFilterSearch(i.filter)}
            >{i.label}</button>
          </li>)
        }
      </ul>
    </section>
  )
}

export default Search;
