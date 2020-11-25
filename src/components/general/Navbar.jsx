import React, { useState, useEffect } from 'react';
import Style from './navbar.module.css';
import {Link} from 'react-router-dom';
import { getAllInitiatives } from '../../API/crud';

// const db = firebase.firestore();

export const Header = () => {
    return (
        <div className={`navbar-head ${Style.navHead}`}>
            {/* <picture className={`burger-box ${Style.burgerBox}`}>
                <img className={`burger-icon${Style.burgerIcon}`} src='https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Ficons%2Fburger-icon.png?alt=media&token=84636a1a-c8e2-4620-89d6-ad5eff849bf2' alt='buger icon'></img>
            </picture> */}
            <picture className={`logo-box ${Style.logoBox}`}>
                <img className={`logo-interbank ${Style.logo}`} src='https://firebasestorage.googleapis.com/v0/b/interbank-project.appspot.com/o/assets%2Flogo-interbank.png?alt=media&token=88d398e8-e2ac-414b-bd0c-04d8507f8a49' alt='logo' ></img>
            </picture>
        </div>
    )
};

const Navbar = ()=>{
    const [allInitiatives, setAllInitiatives] = useState([]);
    
    

useEffect(() => {
    getAllInitiatives(setAllInitiatives);


    
}, []);
console.log(allInitiatives);
console.log(getAllInitiatives());
return(
    <nav className={`navbar fixed-bottom ${Style.nav}`}>
        <div className={`navbar-list ${Style.navList}`}>
            <Link className={`nav-link ${Style.navBtn}`} to='/Background'><button className={`nav-button ${Style.navBtn}`}>Subir Iniciativa</button></Link>
            <Link className="nav-link" to='/Initiatives'><button className={`nav-button ${Style.navBtn}`}>Iniciativas</button></Link>
            {/* <Link className="nav-link" to='/'><button className={`nav-button ${Style.navBtn}`}>Tunki</button></Link>
            <Link className="nav-link" to='/Announcement'><button className={`nav-button ${Style.navBtn}`}>Convocatoria workshop</button></Link>
            <Link className="nav-link" to='/Workshop'><button className={`nav-button ${Style.navBtn}`}>Workshop</button></Link>
            <Link className="nav-link" to='/Summary'><button className={`nav-button ${Style.navBtn}`}>Resumen workshop</button></Link>
            <Link className="nav-link" to='/Committee'><button className={`nav-button ${Style.navBtn}`}>Comité ERCP</button></Link> */}
            <Link className="nav-link" to='/LogOut'><button className={`nav-button ${Style.navBtn}`}>Salir</button></Link>
        </div>
    </nav>
)
}

export default Navbar;