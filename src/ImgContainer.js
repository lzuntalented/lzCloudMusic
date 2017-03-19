import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import lzlog from './utils';

function ImgContainer(props){
    return <div onClick={props.onClick} className="img-container">
        <img src={props.src} />
        {props.children}
    </div>
}

export default ImgContainer
