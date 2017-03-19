import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from './utils';

export default class CirclePorgress extends Component{
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
    let cname = 'circleProgress_wrapper ' + this.props.className;
    let circleWidth = this.props.w || 30;
    let borderWidth = this.props.bw || 2;
    let progress = this.props.progress || 0;

    let rotate = -135;
    let lrotate = -135;
    let rotateAll = 135 + 45;
    if(progress >= 50){
      rotate = -135 + rotateAll / 50 * (progress - 50);
      lrotate = 45;
    }else{
      lrotate = -135 + rotateAll / 50 * progress;
    }

    return <div onClick={this.props.onClick} className={cname} style={{width:circleWidth + 'px',height:circleWidth + 'px',lineHeight:circleWidth + 'px'}}>
          	<div className="wrapper right">
                      <div className="circleProgress rightcircle" style={{borderWidth:borderWidth + 'px',width:(circleWidth - 2 * borderWidth) + 'px',height:(circleWidth - 2 * borderWidth) + 'px',transform:'rotate(' + lrotate + 'deg)'}}></div>
                  </div>
                  <div className="wrapper left">
                      <div className="circleProgress leftcircle" style={{borderWidth:borderWidth + 'px',width:(circleWidth - 2 * borderWidth) + 'px',height:(circleWidth - 2 * borderWidth) + 'px',transform:'rotate(' + rotate + 'deg)'}}></div>
                  </div>
                  {this.props.children}
          </div>
  }

}
