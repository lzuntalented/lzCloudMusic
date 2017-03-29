import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from '../utils';
import {isFunction,isUndefined} from '../utils/Tools';

class TabSlide extends Component {
  constructor(state) {
    super(state);
    this.state = {

        slide: {
          left: 0,//当前位移
          touchStart:0,//鼠标点击时坐标记录
          touchStartY:0,
          touchEnd:0,
          moving: false,
          index:0,
          count:this.props.children.length,
          v:false
        },

        width:0,
        height:0,

        loopHandle:null,//定时器句柄
        pauseTime:0,
        pauseTimeTotal:120,
        loopDirection:1,//定时器运动方向，1向右 0向左
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.slide.index = nextProps.select_index;
    this.state.slide.left = -this.state.width * this.state.slide.index;
  }

  render(){

    return <div className="tabslide-container"
            onMouseDown={this.handleMouseDown.bind(this)}
            onMouseMove={this.handleMouseMove.bind(this)}
            onMouseUp={this.handleMouseUp.bind(this)}

            onTouchStart={this.handleMouseDown.bind(this)}
            onTouchMove={this.handleMouseMove.bind(this)}
            onTouchEnd={this.handleMouseUp.bind(this)}
            style={{height:this.state.height + "px"}}
             >
              <div ref="slide" className="slide" style={{width:this.props.children.length + '00%',left:this.state.slide.left + "px"}}>
                {
                  this.props.children.map((item)=>{
                    return item;
                  })
                }
              </div>
            </div>
  }

  componentWillUnmount(){
    this.state.loopHandle && clearInterval(this.state.loopHandle);
  }

  componentDidMount(){
    let width = findDOMNode(this).offsetWidth;
    this.state.width = width;

    let height = findDOMNode(this.refs.slide).offsetHeight;
    this.state.height = height;
    this.setState(this.state);
    /*由于图片加载顺序，延时在重置高度*/
    setTimeout(()=>{
      let height = findDOMNode(this.refs.slide).offsetHeight;
      this.state.height = height;
      this.setState(this.state);
    },1000);
    // lzlog(findDOMNode(this).offsetWidth)

//     // 开启定时器循环播放
    let loop = isUndefined(this.props.loop);
    if(!loop){
        this.state.loopHandle = setInterval(()=>{
          let speed = 20;
          if(this.state.pauseTime > this.state.pauseTimeTotal + speed){
            this.state.pauseTime = 0;
          }else if(this.state.pauseTime > this.state.pauseTimeTotal){
            if(Math.abs(this.state.slide.left) >= this.state.width * (this.state.slide.count - 1)){
              this.state.loopDirection = 0;
            }
            if(Math.abs(this.state.slide.left) <= 0){
              this.state.loopDirection = 1;
            }

            if(this.state.loopDirection == 1){
              this.state.slide.left -= this.state.width / speed;
            }else{
              this.state.slide.left += this.state.width / speed;
            }
            // if(Math.abs(this.state.slide.left) >= this.state.width * (this.state.slide.count - 1)){
            //   this.state.slide.left = 0;
            // }
            // this.state.slide.left -= this.state.width / 10;
            this.setState(this.state);
            this.state.pauseTime ++;
          }else{
            this.state.pauseTime ++;
          }
        },1000 / 60);
    }
  }

  handleMouseDown(e){
    let x = e.pageX || e.changedTouches[0].pageX;
    let y = e.pageY || e.changedTouches[0].pageY;
    this.state.slide.touchStartY = y;
    this.state.slide.touchStart = x;
    this.state.slide.touchEnd = x;
    this.state.slide.moving = true;
  }

  handleMouseMove(e){
    e.stopPropagation();
    // e.preventdefault();
    if(!this.state.slide.moving) return;

    // 上下滚动时左右禁止
    // let y = e.pageY || e.changedTouches[0].pageY;
    // if(Math.abs(y - this.state.slide.touchStartY) > 10){
    //   this.state.slide.moving = false;
    //   return;
    // }
    //
    let x = e.pageX || e.changedTouches[0].pageX;
    this.state.slide.touchEnd = x;
    this.state.slide.left = x - this.state.slide.touchStart + (-this.state.slide.index * this.state.width);
    this.setState(this.state)
  }

  handleMouseUp(proxy,e){
    this.state.slide.moving = false;
    let offset = this.state.slide.touchEnd - this.state.slide.touchStart;
    if(Math.abs(offset) >= this.state.width / 2){
      if(offset > 0){
        this.state.slide.index > 0 && this.state.slide.index --;
      }else{
        this.state.slide.index < this.state.slide.count - 1 && this.state.slide.index ++;
      }
    }

    this.state.slide.left = -this.state.width * this.state.slide.index;
    this.setState(this.state)
  }

  handleMouse(proxy,e){

  }
}

export default TabSlide;
