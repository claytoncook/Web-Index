import React, { useState, useEffect } from 'react';
import './Card.scss';

import urlExists from './helpers/urlExists';

function Card(props) {
    const [status, setStatus] = useState();

    useEffect(() => {
        urlExists(props.text).then((val) => {
            setStatus(val);
        })
    })

    return (
        <li className="Card" style={{color: (status === 0) ? 'green' : 'red'}}>
            {props.text}
        </li>
    );
}

export default Card;