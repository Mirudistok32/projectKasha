import React from "react";
import Search from './Search'
import { connect } from 'react-redux'
import { onChangeSearchLabelAc, setFilterSearchAc } from './../../../../../../bll/item-reducer'

class ContainerSearch extends React.Component {
  render() {
    const { searchLabel, onChangeSearchLabelAc, setFilterSearchAc, filterSearch } = this.props;

    return <Search
      searchLabel={searchLabel}
      onChangeSearchLabel={onChangeSearchLabelAc}
      setFilterSearchAc={setFilterSearchAc}
      filterSearch={filterSearch} />
  }
}

const mapStateToProps = (state) => {
  return {
    searchLabel: state.itemReducer.searchLabel,
    filterSearch: state.itemReducer.filterSearch,
  }
}

const mapDispatchToProps = ({
  onChangeSearchLabelAc,
  setFilterSearchAc
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerSearch);
