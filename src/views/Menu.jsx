import React from 'react';
import Navbar from '../components/general/Navbar';
import GetJsonFromXlxs from '../components/GetJsonFromXlxs';

const Menu = () => {

    return (
        <div>
            <React.Fragment>
                <Navbar />
                <h2>Interkunaq</h2>
                <h5>Sube aquí tu iniciativa por favor:</h5>
                <GetJsonFromXlxs />
            </React.Fragment>
        </div>
    )
};

export default Menu;
