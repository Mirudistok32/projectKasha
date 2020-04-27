import React from "react";
import Content from './Content'
import { connect } from "react-redux";
import { todoListThunkCreator } from './../../../bll/item-reducer'

class ContainerContent extends React.Component {

  componentDidMount() {
    this.props.todoListThunkCreator();
  }

  render() {
    return <Content />
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = ({
  todoListThunkCreator
})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContent);
