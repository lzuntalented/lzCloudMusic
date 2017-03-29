import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Tabs from './Tabs';
import TabSlide from './TabSlide';
import ImgContainer from './ImgContainer';
import UnitContainer from './UnitContainer';
import {hashHistory } from 'react-router';

import lzlog from '../utils';

import store from '../reducers'

export default class MusciList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      idx:0,
      mlist:[
        [
          {
            src:"http://p1.music.126.net/AxYqcCZYY5e_Qxa1HK80Gg==/109951162876638337.jpg?param=190y190",
            txt:'那些只听前奏就中毒的英文歌',
            click:function(e){
              hashHistory.push("list");
            }
          },
          {
            src:"http://p1.music.126.net/TSdh9AakhPbjI6JDcOkqmQ==/19056735532640876.jpg?param=190y190",
            txt:'入耳便爱上的英文歌',
            click:function(e){
              // hashHistory.push("list");
store.dispatch({ type: 'INCREMENT',idx:2 })
            }
          }
        ],
        [
          {
            src:"http://p1.music.126.net/sQKLXBR_GThk5n-M2wtdDg==/758663033420897.jpg?param=190y190",
            txt:'那些只听前奏就中毒的英文歌',
            click:function(e){
store.dispatch({ type: 'INCREMENT',idx:1 })
            }
          },
          {
            src:"http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg?param=190y190",
            txt:'入耳便爱上的英文歌'
          }
        ],
        [
          {
            src:"http://p1.music.126.net/TT0MxuY6JOBeVh6H-Wfd1Q==/18192519393706276.jpg?param=190y190",
            txt:'那些只听前奏就中毒的英文歌'
          },
          {
            src:"http://p1.music.126.net/8GfeP32OYMILxOZKaq10Fw==/19066631137284090.jpg?param=190y190",
            txt:'入耳便爱上的英文歌'
          }
        ]
      ]
    }
  }

  render(){
    return <div>
              <UnitContainer title="精品歌单" list={this.state.mlist} />
           </div>
  }
}
