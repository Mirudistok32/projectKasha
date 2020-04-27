import React from "react";
import s from "./Pagination.module.scss";

class Pagination extends React.Component {
  render() {
    return (
    <div className={s.pagination}>{this.props.number}</div>
    );
  }
}

export default Pagination;
