import React from 'react';
import Style from './navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <nav className={`navbar fixed-bottom ${Style.nav}`}>
            <div className={`navbar-head ${Style.navHead}`}>
                <picture className={`burger-box ${Style.burgerBox}`}>
                    <img className={`burger-icon${Style.burgerIcon}`} src='https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Ficons%2Fburger-icon.png?alt=media&token=84636a1a-c8e2-4620-89d6-ad5eff849bf2' alt='buger icon'></img>
                </picture>
                <picture className={`logo-box ${Style.logoBox}`}>
                    <img className={`logo-interbank ${Style.logo}`} src='https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Flogo-interbank.png?alt=media&token=88d398e8-e2ac-414b-bd0c-04d8507f8a49' alt='logo' ></img>
                </picture>
            </div>
            <div className={`navbar-list ${Style.navList}`}>
                <Link to='/Background'><button className={`nav-button ${Style.navBtn}`}>Antecedentes</button></Link>
                <Link to='/Initiatives'><button className={`nav-button ${Style.navBtn}`}>Iniciativas</button></Link>
                <Link to='/'><button className={`nav-button ${Style.navBtn}`}>Tunki</button></Link>
                <Link to='/Announcement'><button className={`nav-button ${Style.navBtn}`}>Convocatoria workshop</button></Link>
                <Link to='/Workshop'><button className={`nav-button ${Style.navBtn}`}>Workshop</button></Link>
                <Link to='/Summary'><button className={`nav-button ${Style.navBtn}`}>Resumen workshop</button></Link>
                <Link to='/Committee'><button className={`nav-button ${Style.navBtn}`}>Comité ERCP</button></Link>
                <Link to='/LogOut'><button className={`nav-button ${Style.navBtn}`}>Salir</button></Link>
            </div>
        </nav>
    )
}
export default Navbar;