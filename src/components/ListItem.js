import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import ListItemContainer from './ListItemContainer';
import Icon from './Icon';

import store from '../reducers'

import lzlog from '../utils';

export default class ListItem extends Component{
  constructor(props) {
    super(props);
  }

  handleClick(e){
    store.dispatch({ type: 'INCREMENT',idx:e,list:[1,2] })
  }

  render(){
    return <div className="music-list-container"  >
      <ListItemContainer className="line">
        <Icon icon="bofang index" ></Icon>
        <div className="flex1">
          <lable className="name">播放全部(共{this.props.items.length}首)</lable>
          </div>
        <Icon icon="androidmorevertical p-lr-10" txt="多选" ></Icon>
      </ListItemContainer>
    {
      this.props.items.map((item,idx)=>{
        return <ListItemContainer key={idx} click={this.handleClick.bind(this,idx)}>
          <div className="flex1 index" >
            {++idx}
          </div>
          <div className="flex1 line">
          <ListItemContainer >
            <div className="flex1">
              <lable className="name">{item.name}</lable>
              <div className="song">{item.songer}-{item.belong}</div>
              </div>
            <Icon icon="androidmorevertical index" />
            </ListItemContainer>
          </div>
        </ListItemContainer>
      })
    }
    </div>
  }

}
