import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from '../utils';
import Icon from './Icon';

export default class Tabs extends Component{
  constructor(props) {
    super(props);
    this.state = {
      idx:0
    }
  }

  handleClick(e){
    this.state.idx = e;
    this.setState(this.state);
    let node = findDOMNode(this);
    typeof this.props.click === "function" && this.props.click.apply(this,arguments);
  }
  // this.props.items && this.props.items.map((item,idx) => {
  //   return <div className={this.state.idx == idx ? "active": ""} onClick={this.handleClick.bind(this,idx)} key={idx}>{item.txt}</div>
  // })
  render(){
    let {style,items,click} = this.props;
    let cname= 'tab-container ' + this.props.className;
    return <div className={cname}>
      {
        this.props.items && this.props.items.map((item,idx) => {
          return <div className={this.state.idx == idx ? "active": ""} onClick={this.handleClick.bind(this,idx)} key={idx}>
            {item.icon ? <Icon icon={item.icon} /> : '' }
            <div>{item.txt}</div>
          </div>
        })
      }
          </div>
  }
}
