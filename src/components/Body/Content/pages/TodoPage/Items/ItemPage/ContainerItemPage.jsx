import React from "react";
import ItemPage from './ItemPage';
import { setItemAc } from './../../../../../../../bll/item-reducer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

class ContainerItemPage extends React.Component {


  componentDidMount() {
    const { setItemAc, match } = this.props;
    setItemAc(match.params.id);
  }

  render() {
    console.log("ContainerItemPage");
    const { item } = this.props
    return <ItemPage title={item.title} text={item.text} />
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.itemReducer.item
  }
}

const mapDispatchToProps = ({
  setItemAc
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ContainerItemPage)
