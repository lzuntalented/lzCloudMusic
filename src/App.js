import React, { Component } from 'react';
import Layout from './Layout';

import lzlog from './utils';

import MusicPage from './page/MusicPage';

import route from './Router'; //路由配置

import './utils/LzEvent';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './reducers'

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
      <Provider store={store}>
        <div>
          {route}
          <MusicPage />
        </div>
      </Provider>
    );
  }

  componentDidMount(){
    /*添加事件*/

  }
}
