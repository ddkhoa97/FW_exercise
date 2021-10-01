import React from 'react'
import { Link } from "react-router-dom";
import Search from './Search'
import styles from "./Client.module.css"

export default function ClientView(props) {

    function updateSearchFilter (event)
    {
        console.log(event.target.value)
      props.onSearchFilterUpdate(event.target.value)
    }

   
    return (
        

    <div>
    <div className={ styles.header } >
      <input type="text" className={ styles.searchbox } onChange={ updateSearchFilter } placeholder="Search"/>
      <button>
      <Link to="/admin">
         Admin
        </Link>
        </button>
     
      { props.userInfo == null ? (
           <button>
        <Link to="/register">
         Register
         
        </Link>
        </button>
      ) : ( <button>
        <Link to="/profile">
         Profile
        </Link>
        </button>
      ) }

   
    </div>

   

    <div className={ styles.body }>
    {
      
    props.items
        .filter(item => item.name.includes(props.SeachString))
        .map(item => <Search key={item.id} {...item} />
        )
    
    }
    </div>
  </div>
        
    )
}
