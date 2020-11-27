import React from 'react';
import PropTypes from 'prop-types';
import Style from './navbar.module.css';
import interkunaq from '../../assets/INTERKUNAQ.png';
import uploadIcon from '../../assets/SVG/IconoSubirIniciativa.svg';
import initiativesIcon from '../../assets/SVG/IconoIniciativas.svg';
import statsIcon from '../../assets/SVG/IconoEstadistica.svg';
import logoutIcon from '../../assets/SVG/IconoSalir.svg';
import {signOut} from '../../API/auth';


export const Header = () => {
    return (
        <div className={`navbar-head ${Style.navHead}`}>
            <picture className={`logo-box ${Style.logoBox}`}>
                <img className={`logo-interbank ${Style.logo}`} src={interkunaq} alt='logo-interkunaq' ></img>
            </picture>
        </div>
    )
};

export const Navbar = (props)=>{
    const { setView } = props;

    return(
        <nav className={`navbar fixed-bottom ${Style.nav}`}>
            <div className={`navbar-list ${Style.navList}`}>
                <button onClick={() => setView('upload-initiative')} className={`nav-button ${Style.navBtn}`}><img src={uploadIcon} className={`navbar-icon ${Style.navIcon}`} alt=""/>Subir Iniciativa</button>
                <button onClick={() => setView('initiatives')} className={`nav-button ${Style.navBtn}`}><img src={initiativesIcon} className={`navbar-icon ${Style.navIcon}`} alt=""/>Iniciativas</button>
                <button onClick={() => setView('indicators')} className={`nav-button ${Style.navBtn}`}><img src={statsIcon} className={`navbar-icon ${Style.navIcon}`} alt=""/>Indicadores</button>
                <button onClick={(e)=>signOut(e)} className={`nav-button ${Style.navBtn}`}><img src={logoutIcon} className={`navbar-icon ${Style.navIcon}`} alt=""/>Salir</button>
            </div>
        </nav>
    )
};

Navbar.propTypes = {
    setView: PropTypes.func.isRequired,
};

