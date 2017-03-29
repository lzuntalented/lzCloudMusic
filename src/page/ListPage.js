import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Tabs from '../components/Tabs';
import TabSlide from '../components/TabSlide';
import Recommoned from '../components/Recommoned';
import MusicList from '../components/MusicList';
import ListItemContainer from '../components/ListItemContainer';
import ImgContainer from '../components/ImgContainer';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';

import { hashHistory } from 'react-router'

import lzlog from '../utils';

class ListPage extends Component{
  constructor(state){
    super(state);
    this.state={
      items:[
        {
          txt: '1233',
          icon:'xihuan'
        },
        {
          txt: '104',
          icon:'pinglun'
        },
        {
          txt: '80',
          icon:'erji'
        },
        {
          txt: '下载',
          icon:'xiazai'
        }
      ],
      tabSelect:0,

      mlist:[
        {
          name: '歌曲1',
          songer: '歌手1',
          belong: '专辑1'
        },
        {
          name: '歌曲2',
          songer: '歌手1',
          belong: '专辑1'
        }
      ]
    }
  }

  tabclick(e){
    hashHistory.go(-1)
  }

  render() {
    return (
      <div>
        <div className="position-relative">
          <div className="img-blur-container">
            <img src='http://p1.music.126.net/STK_YmozwvPwEJOH8q-w4w==/109951162877545847.jpg?param=190y190' />
          </div>
        <ListItemContainer className="nav-container" >
          <Icon icon="fanhui p-lr-10" onClick={this.tabclick.bind(this)} ></Icon>
          <div className="flex1">
            <lable className="name">播放全部(共首)</lable>
            </div>
          <div>
            <Icon icon="sou p-lr-10" ></Icon>
            <Icon icon="androidmorevertical p-lr-10" ></Icon>
          </div>
        </ListItemContainer>
          <div  className="p-lr-10" >
          <ListItemContainer>
            <ImgContainer src='http://p1.music.126.net/STK_YmozwvPwEJOH8q-w4w==/109951162877545847.jpg?param=190y190' />
            <div>
              <label>adasksdfajdlfkjasldfjasjsdklfgjasdlsdkjflasdjflaksdjf几十块的精髓咖啡店l</label>
              <p>1234</p>
            </div>
          </ListItemContainer>

          <Tabs items={this.state.items} />
          </div>
        </div>
        <ListItem items={this.state.mlist} />
      </div>
    );
  }
}

export default ListPage;
