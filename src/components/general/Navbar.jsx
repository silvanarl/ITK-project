
import React, { useState, useEffect }from 'react';
import PropTypes from 'prop-types';
import Style from './navbar.module.css';
// import {Link} from 'react-router-dom';
import { getAllInitiatives } from '../../API/crud';

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

export const Navbar = ()=>{
    // const { setView } = props;
    const [allInitiatives, setAllInitiatives] = useState([]);
    
    useEffect(() => {
        getAllInitiatives(setAllInitiatives);
    }, []);
    console.log(allInitiatives);

    return(
        <nav className={`navbar fixed-bottom ${Style.nav}`}>
            <div className={`navbar-list ${Style.navList}`}>
                <button onClick={() => console.log('upload-initiative')} className={`nav-button ${Style.navBtn}`}>Subir Iniciativa</button>
                <button onClick={() => console.log('initiatives')} className={`nav-button ${Style.navBtn}`}>Iniciativas</button>
                <button onClick={() => console.log('logout')} className={`nav-button ${Style.navBtn}`}>Salir</button>
            </div>
        </nav>
    )
};

Navbar.propTypes = {
    setView: PropTypes.func.isRequired,
};

