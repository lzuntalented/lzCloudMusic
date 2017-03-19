import React, { Component } from 'react';

export default class Icon extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    let cname = 'iconfont icon-' + this.props.icon
    return <span onClick={this.props.onClick} className={cname}>{this.props.txt}</span>
  }

}
