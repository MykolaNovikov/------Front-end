import React from "react";
import { Link } from 'react-router-dom';

const Account = () => 
    <div>
        <p>тут буде сторінка профілю користувача</p>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/registration"><button>Registration</button></Link>
    </div>
export default Account;

