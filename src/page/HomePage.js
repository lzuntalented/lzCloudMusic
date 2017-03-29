import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Tabs from '../components/Tabs';
import TabSlide from '../components/TabSlide';

import Recommoned from '../components/Recommoned';
import MusicList from '../components/MusicList';
import Icon from '../components/Icon';

import LeftPage from '../page/LeftPage';

import lzlog from '../utils';

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
      tabMainSelect:0,
      navitems:[
        {
          'icon': 'music'
        },
        {
          'icon': 'erji'
        },
        {
          'icon': 'ren'
        }
      ],
      leftOpen:false,
    }
  }

  tabclick(e){
    this.state.tabSelect = e;
    this.setState(this.state);
  }

  openLeft(){
    this.state.leftOpen = true;
    this.setState(this.state);
  }

  closeLeft(){
    this.state.leftOpen = false;
  }

  render() {
    // let {...others} = this.props;
    return (
      <div>
        <div className="nav-container" style={{background:'#C10D0C',color:"white"}}>
          <Icon icon='liebiao p-lr-10' onClick={this.openLeft.bind(this)} />
          <Tabs items={this.state.navitems} className="tabs"></Tabs>
          <Icon icon='sou p-lr-10' />
        </div>

        <TabSlide select_index={this.state.tabMainSelect}>
            <div>
              <Tabs className="p-tb-10" items={this.state.items} click={this.tabclick.bind(this)} ></Tabs>
              <TabSlide select_index={this.state.tabSelect}>
                  <Recommoned>
                  </Recommoned>
                  <MusicList />
                <div style={{background:"yellow"}}>153</div>
              </TabSlide>
            </div>
          <div style={{background:"pink"}}>153</div>
        </TabSlide>
        <LeftPage open={this.state.leftOpen} onClose={this.closeLeft.bind(this)} />
      </div>
    );
  }
}

export default HomePage;
