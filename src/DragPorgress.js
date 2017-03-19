import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from './utils';
import {isFunction,isUndefined} from './Tools';

export default class DragPorgress extends Component{
  constructor(props) {
    super(props);
    this.state = {
      progress:0,
      width:0,
      moving:false,
      left:0,
    }
  }

  render(){
    let progress = this.state.progress;
    return <div className="drag-progress-container" style={{width:this.props.width}}
    onMouseDown={this.handleMouseDown.bind(this)}
    onMouseMove={this.handleMouseMove.bind(this)}
    onMouseUp={this.handleMouseUp.bind(this)}

    onTouchStart={this.handleMouseDown.bind(this)}
    onTouchMove={this.handleMouseMove.bind(this)}
    onTouchEnd={this.handleMouseUp.bind(this)}
    >
              <div className="ended" style={{width:progress+'%'}}></div>
              <div

               className="circle" style={{left:progress+'%'}}></div>
            </div>
  }


  componentWillReceiveProps(nextProps) {
    this.state.progress = nextProps.progress;
    this.setState(this.state);
  }

  componentDidMount(){
    this.state.progress = this.props.progress;
    this.state.width = findDOMNode(this).offsetWidth;
    this.state.left = findDOMNode(this).offsetLeft;
    this.setState(this.state);
  }

  handleMouseDown(e){
    let x = e.pageX || e.changedTouches[0].pageX;
    let y = e.pageY || e.changedTouches[0].pageY;
    x = x - this.state.left;
    this.state.progress = Math.floor(x / this.state.width * 100);
    this.state.moving = true;
    this.setState(this.state);
  }

  handleMouseMove(e){
    e.stopPropagation();
    if(!this.state.moving) return ;
    let x = e.pageX || e.changedTouches[0].pageX;
    x = x - this.state.left;
    x < 0 && (x = 0);
    x > this.state.width && (x = this.state.width);
    this.state.progress = Math.floor(x / this.state.width * 100);
    this.setState(this.state);
  }

  handleMouseUp(proxy,e){
    this.state.moving = false;
    isFunction(this.props.onChange) && this.props.onChange(this.state.progress);
    // let x = e.pageX || e.changedTouches[0].pageX;
    // this.state.progress = Math.floor(x / this.state.width * 100);
    // this.setState(this.state);
  }

}
