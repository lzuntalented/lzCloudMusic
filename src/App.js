import React, { Component } from 'react';
import Layout from './Layout';
import Counter from './Counter';
import Tabs from './Tabs';
import TabSlide from './TabSlide';
import lzlog from './utils';
import HomePage from './HomePage';
import MusicPage from './MusicPage';
import Icon from './Icon';
import ListPage from './ListPage';
import route from './Router'; //路由配置

import './LzEvent';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default class App extends Component {
  constructor(state){
      super(state)
      this.state = {
        items:[
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
        pageshow:'HomePage',
      }
  }

  // <Tabs click={this.tabclick} items={this.state.items} />
  // <TabSlide>
  //   <div style={{background:"green"}}>123</div>
  //   <div>153</div>
  // </TabSlide>

  tabclick(e){
  //  lzlog(e);
  }

  render() {
    return (
      <Layout>
        <div className="nav-container" style={{background:'#C10D0C',color:"white"}}>
          <Icon icon='liebiao p-lr-10' />
          <Tabs items={this.state.items} className="tabs"></Tabs>
          <Icon icon='sou p-lr-10' />
        </div>
        {route}
        <MusicPage />
      </Layout>
    );
  }

  componentDidMount(){
    /*添加事件*/

  }
}
