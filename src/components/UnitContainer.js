import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import ImgContainer from './ImgContainer';

import lzlog from '../utils';
import {isFunction} from '../utils/Tools';

export default class UnitContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    }
  }

  handleClick(e){
    isFunction(e) && e.apply(this,arguments);
  }

  render(){
    return <div className="grid-container">
              <div className="title">{this.props.title}</div>
              {
                this.props.list.map((items,idx)=>{
                  return <div className="row" key={idx}>{items.map((item,idx)=>{
                    return <div key={idx}>
                            <ImgContainer src={item.src} onClick={this.handleClick.bind(this,item.click)}>
                              {
                                  item.tips && item.tips.map((tip,idx)=>{
                                    return <span className={tip.cname} key={idx}>{tip.txt}</span>
                                  })
                              }

                            </ImgContainer>
                            <div>{item.txt}</div>
                    </div>
                  })}</div>
                })
              }
           </div>
  }
}
