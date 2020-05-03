import React from "react";
import ButtonNewItems from './ButtonNewItems'
import { connect } from 'react-redux'
import { isModalWindowAddItemAc } from './../../../../../../bll/item-reducer'

class ContainerButtonNewItems extends React.PureComponent {

  render() {
    return <ButtonNewItems
      isModalWindowAddItem={this.props.isModalWindowAddItem}
      isModalWindowAddItemAc={this.props.isModalWindowAddItemAc} />
  }

}

const mapStatToProps = (state) => {
  return {
    isModalWindowAddItem: state.itemReducer.isModalWindowAddItem
  }
}


const mapDispatchToProps = {
  isModalWindowAddItemAc
}
export default connect(mapStatToProps, mapDispatchToProps)(ContainerButtonNewItems);
