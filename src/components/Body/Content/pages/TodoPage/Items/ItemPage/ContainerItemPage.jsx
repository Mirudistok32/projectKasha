import React from "react";
import ItemPage from './ItemPage';
import { } from './../../../../../../../bll/item-reducer'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

class ContainerItemPage extends React.Component {

  state = {
    title: "Ничего не работает",
    text: "Текст тоже не работает"
  }

  componentDidMount() {
    // const { match, items } = this.props;
    // const item = items.find(i => i.id === +match.params.id)
    // this.setState(() => {
    //   return {
    //     title: item.title,
    //     text: item.text
    //   }
    // })
  }

  render() {
    return <ItemPage title={this.state.title} text={this.state.text} />
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.itemReducer.items
  }
}

const mapDispatchToProps = ({
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ContainerItemPage)
