import React from 'react';
import './spinner.css';

const Spinner = () => (
    <div className="center">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
);

export default Spinner;