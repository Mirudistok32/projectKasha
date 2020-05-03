import React from "react";
import ModalNewItems from './ModalNewItems'
import { connect } from 'react-redux'
import { addNewItemAc, isModalWindowAddItemAc } from './../../../../../../../bll/item-reducer'

class ContainerModalNewItemsNewItems extends React.PureComponent {

  render() {
    return <ModalNewItems {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = ({
  addNewItemAc,
  isModalWindowAddItemAc
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerModalNewItemsNewItems);
