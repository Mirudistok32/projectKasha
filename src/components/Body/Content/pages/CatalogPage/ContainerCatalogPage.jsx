import React from "react";
import CatalogPage from './CatalogPage'
import { connect } from 'react-redux'
import { setmainTitleAc } from './../../../../../bll/item-reducer'

class ContainerTodoPage extends React.Component {

  componentDidMount() {
    this.props.setmainTitleAc('SHOP');
  }

  render() {

    return <CatalogPage />
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = ({
  setmainTitleAc
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTodoPage);
