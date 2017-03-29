import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from '../utils';

export default class ListItemContainer extends Component{
  constructor(props) {
    super(props);
  }

  handleClick(e){
    typeof this.props.click === "function" && this.props.click.apply(this,arguments);
  }

  render(){
    let cname = 'list-item-container ' + this.props.className;
    return <div onClick={this.handleClick.bind(this)} className={cname}>{this.props.children}</div>
  }

}
