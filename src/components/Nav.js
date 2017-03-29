import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from '../utils';

export default class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      palyHandle:null,
      height:0,
    }
  }

  handleClick(e){
    this.state.idx = e;
    this.setState(this.state);
    let node = findDOMNode(this);
    typeof this.props.click === "function" && this.props.click.apply(this,arguments);
  }

  render(){
    return <div className="nav-container"></div>
  }

}
