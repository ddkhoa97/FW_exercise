import React from 'react'
import styles from "../css/Header.module.css"
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

export default function Header() {
    return (
      <div className={styles.body}>
        <div className={styles.container}>
       
      <HeaderLeft></HeaderLeft>
      <HeaderRight></HeaderRight>
        </div>
        </div>
        
       
    )
}
