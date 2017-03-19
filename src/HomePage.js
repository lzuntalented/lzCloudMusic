import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Tabs from './Tabs';
import TabSlide from './TabSlide';

import Recommoned from './Recommoned';
import MusicList from './MusicList';

import lzlog from './utils';

class HomePage extends Component{
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
    // let {...others} = this.props;
    return (
      <div>
        <Tabs className="p-tb-10" items={this.state.items} click={this.tabclick.bind(this)} ></Tabs>
        <TabSlide select_index={this.state.tabSelect}>
            <Recommoned>
            </Recommoned>
            <MusicList />
          <div style={{background:"pink"}}>153</div>
        </TabSlide>
      </div>
    );
  }
}

export default HomePage;
