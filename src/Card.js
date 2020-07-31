import React from 'react';
import './Card.scss';

import urlExists from './urlExists';

function Card(props) {
    const status = urlExists(props.text);
  return (
    <li className="Card">
        {console.log(props.text, status)}
        {
            status.then((val) => {
                if(val === 0) {
                    <a>VALID</a>
                }
            }).catch(() => {
                console.log("INVALID")
            })
        }
        
    </li>
  );
}

export default Card;