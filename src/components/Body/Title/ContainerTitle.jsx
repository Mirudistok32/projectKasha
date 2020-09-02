import React from "react";
import Title from './Title'
import { connect } from 'react-redux'

class ContainerTitle extends React.PureComponent {

  render() {
    const { mainTitle } = this.props;
    return <Title mainTitle={mainTitle} />
  }
}

const mapStateToProps = (state) => {
  return {
    mainTitle: state.itemReducer.mainTitle
  }
}

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTitle);
