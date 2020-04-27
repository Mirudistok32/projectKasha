import React from "react";
import Paginations from './Paginations'
import { connect } from 'react-redux'

class ContainerPaginations extends React.Component {

  render() {
    return <Paginations itemsLength={this.props.itemsLength} />
  }
}
const mapStateToProps = (state) => {
  return {
    itemsLength: state.itemReducer.itemsLength,
  }
}

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPaginations);
