import React from "react";
import TodoPage from './TodoPage'
import { connect } from 'react-redux'
import { setmainTitleAc } from './../../../../../bll/item-reducer'

class ContainerTodoPage extends React.Component {

  componentDidMount() {
    this.props.setmainTitleAc('TO DO');
  }

  render() {

    return <TodoPage />
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
