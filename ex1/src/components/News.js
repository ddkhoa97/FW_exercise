import React from 'react';
import styles from "./css/News.module.css";
import img from './imgs/test.jpg'
import img2 from './imgs/test2.jpg'
import img3 from './imgs/test3.jpg'
export default function News(props) {
  
    return (
        
        <div className={styles.container}>
            <div>
               <img src={img} alt="Logo" height='fit-content' width='100%' />
             
            </div>
         <div style={{marginLeft:'15px',marginTop:'10px'}}>
            <div style={{fontWeight:"bold", marginBottom:"10px", fontSize:'12px'}}>{props.data.topic}</div>
            <div style={{fontWeight:"bold", marginBottom:"10px"}}>{props.data.title}</div>
            <div>{props.data.text}</div>
            <div  style={{ marginTop:'20px'}}>{props.data.time}</div>
        </div></div>
    )
}
