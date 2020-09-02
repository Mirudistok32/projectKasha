import React from "react";
import s from "./Title.module.scss";

const Title = React.memo(({ mainTitle }) => {
  return (
    <header className={s.title}>
      <h1>{mainTitle}</h1>
    </header>
  );
})

export default Title;
