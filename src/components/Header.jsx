import React from 'react'
import '../assets/styles/components/header.scss'
import Logo from '../assets/static/Kooper2.png'
import UserIcon from '../assets/static/user-icon.png'

const Header =()=>{
    return(
        
        <header className="header">
            <img className="header__img" src={Logo} alt="Nex Video"/>
            <div className="header__menu">
            <div className="header__menu--profile">
                <img src={UserIcon} alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
            </div>
        </header>

    )
}

export default Header;