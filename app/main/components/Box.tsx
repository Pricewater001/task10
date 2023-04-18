import React from 'react';
import styles from "../main.module.css";

const Box = ({children} : any) => {
  return (
    <div className={styles.box}>
      {children}
    </div>
  )
}

export default Box
