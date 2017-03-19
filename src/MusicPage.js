import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from './utils';

import lzPlay from './lzPlayCore';
import Icon from './Icon';
import Tabs from './Tabs';
import CirclePorgress from './CirclePorgress';
import DragPorgress from './DragPorgress';

export default class MusicPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      palyHandle:null,
      height:0,
      bheight:0,
      progress:0,
      playState:true,
      allTimer:0,
      playIcon:'bofang1',

      items:[
        {
          txt: '私人FM',
          'icon': 'diantai'
        },
        {
          txt: '跑步FM',
          'icon': 'diantai'
        }
      ],
    }
  }

  showBig(e){
    this.state.bheight = this.state.height;
    this.setState(this.state)
  }

  hideBig(){
    this.state.bheight = 0;
    this.setState(this.state)
  }

  pause(e){
    e.stopPropagation();
    this.state.playState = !this.state.playState;
    if(this.state.playState){
      this.state.playIcon = 'bofang1';
      lzPlay.vidioPlay();
    }else{
      this.state.playIcon = 'bofang';
      lzPlay.vidioPause();
    }
    this.setState(this.state)
  }

  onChange(progress){
    this.state.progress = progress;
    lzPlay.vidioPlay(lzPlay.getAlltime() * progress / 100);
    this.setState(this.state)
  }

  render(){
    return <div className="music-container">
            <div className="bottom" onClick={this.showBig.bind(this)} >
              <img src="http://p1.music.126.net/AxYqcCZYY5e_Qxa1HK80Gg==/109951162876638337.jpg?param=190y190" />
              <div className="content">
                <lable>安静了</lable>
                <p className="tip">点击进入播放页</p>
              </div>
              <div className="right-container">
                <CirclePorgress onClick={this.pause.bind(this)} progress={this.state.progress} className="m-t-5 text-center">
                <Icon icon={this.state.playIcon} />
                </CirclePorgress>
              </div>
            </div>
            <div className="big-container transiton-move" style={{height:this.state.bheight + "px"}}>
              <div className="nav-container">
                <Icon onClick={this.hideBig.bind(this)} icon='fanhui p-lr-10' />
                <Tabs items={this.state.items} className="tabs"></Tabs>
                <Icon icon='androidmorevertical p-lr-10' />
              </div>

                <div className="div_play_lrc_bg">
            			<div className={'div_play_lrc_context ' + (this.state.playState ? 'div_play_lrc_context-play' : '')}>
            				<img src={require('./img/lrc_control_img_default.png')} height="155px" width="155px" className="div_play_lrc_img"/>
            				<div className="div_play_lrc_circle"></div>
            			</div>
            			<div className={'div_lrc_control ' + (!this.state.playState ? 'div_lrc_control-play' : '')}>
            				<img src={require('./img/lrc_control.png')} width="100px"/>
            			</div>
            		</div>


              <div className="play-control-container">
                <div className="buts">
                  <Icon icon='xihuan' />
                  <Icon icon='xiazai' />
                  <Icon icon='pinglun' />
                  <Icon icon='androidmorevertical' />
                </div>
                <div className="progress">
                  <div className="left">{this.state.nowTimer}</div>
                  <DragPorgress onChange={this.onChange.bind(this)} progress={this.state.progress} width="100%"/>
                  <div className="right">{this.state.allTimer}</div>
                </div>
                <div className="buts">
                  <Icon icon='bokongtailubozhuanzhibo202' />
                  <Icon icon='shangyiqu' />
                  <Icon icon={this.state.playIcon} onClick={this.pause.bind(this)} />
                  <Icon icon='xiayiqu' />
                  <Icon icon='liebiao' />
                </div>
              </div>
            </div>
          </div>
  }

  componentDidMount(){
    let self = this;
    lzPlay.initVidio({
      'loadeddata':function(){
        self.state.palyHandle && clearInterval(self.state.palyHandle);
        self.state.palyHandle = setInterval(()=>{
          self.state.progress = Math.floor(lzPlay.getCurrettime() / lzPlay.getAlltime()  * 10000) / 100;
          self.state.allTimer = lzPlay.timeChange(lzPlay.getAlltime());
          self.state.nowTimer = lzPlay.timeChange(lzPlay.getCurrettime());
          self.setState(self.state);
        },1000)
      },
      'pause': function(){
        self.state.palyHandle && clearInterval(self.state.palyHandle);
        // self.state.playIcon = 'bofang';
        self.setState(self.state);
      },
      'play': function(){
        self.state.palyHandle && clearInterval(self.state.palyHandle);
        // self.state.playIcon = 'bofang1';
        self.state.palyHandle = setInterval(()=>{
          self.state.allTimer = lzPlay.timeChange(lzPlay.getAlltime());
          self.state.nowTimer = lzPlay.timeChange(lzPlay.getCurrettime());
          self.state.progress = Math.floor(lzPlay.getCurrettime() / lzPlay.getAlltime()  * 10000) / 100;
          self.setState(self.state);
        },1000)
      }
      // ,
      // 'onended':function(){
      //   // lzPlay.vidioPlay(0);
      // }
    });
    lzPlay.setVidioUrl('http://192.168.0.5/vd/1.mp3');

    this.state.height = window.innerHeight;
  }
}
