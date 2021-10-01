import React from 'react'
import { Link } from "react-router-dom";

export default function Register(props) {
    return (
        <div>
            { props.userInfo == null ? (
          <Link to="/register">
            <button>Register</button>
          </Link>
        ) : (
          <Link to="/profile">
            <button>Profile</button>
          </Link>
        ) }
        </div>
    )
}
