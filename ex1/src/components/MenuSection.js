import React from 'react'
import styles from "./css/MenuSection.module.css"
export default function MenuSection(props) {
    return (
        <div style={{marginTop:'10px'}}>
         
          <ol>
              <li>
                  <span>{props.header}</span>
                  <div>{props.description}</div>
              </li> 
            
          </ol>
        </div>
    )
}
