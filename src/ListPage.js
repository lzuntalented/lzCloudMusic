import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Tabs from './Tabs';
import TabSlide from './TabSlide';

import Recommoned from './Recommoned';
import MusicList from './MusicList';
import ListItemContainer from './ListItemContainer';
import ImgContainer from './ImgContainer';
import Icon from './Icon';

import lzlog from './utils';

class ListPage extends Component{
  constructor(state){
    super(state);
    this.state={
      items:[
        {
          txt: '个性推荐'
        },
        {
          txt: '歌单'
        },
        {
          txt: '主播电台'
        },
        {
          txt: '排行榜'
        }
      ],
      tabSelect:0,
    }
  }

  tabclick(e){
    // lzlog('tab:' + e)
    this.state.tabSelect = e;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <ListItemContainer>
          <ImgContainer src='http://p1.music.126.net/STK_YmozwvPwEJOH8q-w4w==/109951162877545847.jpg?param=190y190' />
          <div>
            <label>adasksdfajdlfkjasldfjasjsdklfgjasdlsdkjflasdjflaksdjf几十块的精髓咖啡店l</label>
            <p>1234</p>
          </div>
          <Icon icon="bofang" />
        </ListItemContainer>
      </div>
    );
  }
}

export default ListPage;
