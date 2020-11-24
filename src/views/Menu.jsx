import React from 'react';
import Navbar from '../components/general/Navbar';
import GetJsonFromXlxs from '../components/GetJsonFromXlxs';

const Menu = () => {

    return (
        <React.Fragment>
            <Navbar />
        <div>
            <h2>Interkunaq</h2>
            <h5>Sube aquí tu iniciativa por favor:</h5>
            <GetJsonFromXlxs />
        </div>
        </React.Fragment>
    )
};

export default Menu;
