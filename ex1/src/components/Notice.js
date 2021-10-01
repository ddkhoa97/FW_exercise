import React from 'react'
import styles from "./css/Notice.module.css"
export default function Notice() {
    return (
        <div className={styles.container}>
           <button>LIVE</button>  <span>Uutispäivä</span> 
       
       <div style={{fontSize:'20px'}}>Tuoreimmat uutiset: Hal­li­tus­neu­vot­te­lut käyntiin Norjassa, EU harkitsee läsnäoloa Kabulissa, lämpöyhtiön johtajalle ehdollista vankeutta öljyvuodosta</div> 
       <div style={{fontWeight:'normal', marginTop:'20px'}}>19:03</div>
        </div>
    )
}
