import React from "react";
import { Link } from "react-router-dom";



const Header = () => 
    <header>
        <div className="header">
            <Link to="/"><img src='/images/logo.png' alt='logo' title='logo olx'/></Link>
            <div className='navbar'>
                <div>
                    <span className="eng">english</span>
                    <span className="ukr">мова</span>
                </div>
                <Link to="/message">Повідовлення</Link>
                <Link to="/favorites">Обрані</Link>
                <Link to="/account">Ваш профіль</Link>
                <Link to="/add/an/ad"><button>Додати оголошення</button></Link>
            </div>
        </div>
    </header>   

export default Header;