import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import lzlog from '../utils';
import {isFunction} from '../utils/Tools';

import Icon from '../components/Icon';
import Tabs from '../components/Tabs';
import ListItemContainer from '../components/ListItemContainer';

export default class ListPage extends Component{
  constructor(state) {
    super(state);
    this.state = {
      palyHandle:null,
      height:0,
      width:0,
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

  componentWillReceiveProps(nextProps){
      if(nextProps.open){
        this.state.width = window.innerWidth;
      }else{
        this.state.width = 0;
      }
      this.setState(this.state);
  }

  close(){
      this.state.width = 0;
      this.setState(this.state);

      isFunction(this.props.onClose) && this.props.onClose.apply(this,arguments);
  }

handleMouseMove(e){
  e.stopPropagation();
  // e.preventDefault();
  return true;
}
  render(){
    return <div
      onMouseMove={this.handleMouseMove.bind(this)}
      onTouchMove={this.handleMouseMove.bind(this)}

        className="left-container transiton-move" style={{width:this.state.width+"px",height:this.state.height+"px"}}>
            <div className="main-panel">
              <div className="uinfo" >
                <img className="head" src="http://p1.music.126.net/AxYqcCZYY5e_Qxa1HK80Gg==/109951162876638337.jpg?param=190y190" />
                  <ListItemContainer className="line">
                    <div className="flex1">
                      <lable className="name">可我不爱聪明</lable>
                      </div>
                    <div className="sign p-lr-10">
                      签到
                    </div>
                  </ListItemContainer>
              </div>
              <ListItemContainer className="list">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>我的消息</lable>
                </div>
              </ListItemContainer>
              <ListItemContainer className="list">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>会员中心</lable>
                </div>
              </ListItemContainer>
              <ListItemContainer className="list">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>商城</lable>
                </div>
              </ListItemContainer>
              <ListItemContainer className="list m-b-10">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>在线听歌免流量</lable>
                </div>
              </ListItemContainer>

              <ListItemContainer className="list">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>我的好友</lable>
                </div>
              </ListItemContainer>
              <ListItemContainer className="list m-b-10">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>附近的人</lable>
                </div>
              </ListItemContainer>

              <ListItemContainer className="list">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>个性换肤</lable>
                </div>
              </ListItemContainer>
              <ListItemContainer className="list">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>听歌拾曲</lable>
                </div>
              </ListItemContainer>
              <ListItemContainer className="list">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>定时停止播放</lable>
                </div>
              </ListItemContainer>
              <ListItemContainer className="list m-b-10">
                <div className="flex1">
                  <Icon icon="ren p-r-10"></Icon>
                  <lable>音乐闹钟</lable>
                </div>
              </ListItemContainer>


            </div>
            <div className="close-panel" onClick={this.close.bind(this)} ></div>
          </div>
  }

  componentDidMount(){
    this.state.height = window.innerHeight;
    this.setState(this.state);
  }
}
