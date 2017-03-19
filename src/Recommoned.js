import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import Tabs from './Tabs';
import TabSlide from './TabSlide';
import ImgContainer from './ImgContainer';
import UnitContainer from './UnitContainer';

import lzlog from './utils';

export default class Recommoned extends Component{
  constructor(props) {
    super(props);
    this.state = {
      idx:0,
      mlist:[
        [
          {
            src:"http://p1.music.126.net/STK_YmozwvPwEJOH8q-w4w==/109951162877545847.jpg?param=190y190",
            txt:'旧时光后，愿你活成你想成为的人',
            tips:[
              {
                cname:"tl",
                txt:'12万'
              }
            ]
          },
          {
            src:"http://p1.music.126.net/5hZg_AdOYLrMbDK2vA9b-w==/109951162878009417.jpg?param=190y190",
            txt:'【欧美】深情不如久伴 厚爱'
          },{
            src:"http://p1.music.126.net/RnOZHM0BNxXuy-RwQQI5BA==/3313928048221849.jpg?param=190y190",
            txt:'【节奏控】那些超带感的节奏'
          }
        ],
        [
          {
            src:"http://p1.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=190y190",
            txt:'那些只听前奏就中毒的英文歌'
          },
          {
            src:"http://p1.music.126.net/oKvLxuRCt_ku8XZGUvR-EA==/3173190557815242.jpg?param=190y190",
            txt:'入耳便爱上的英文歌'
          },{
            src:"http://p1.music.126.net/8fQ9jzTJnMweLNm7VoyPSw==/6623458045881301.jpg?param=190y190",
            txt:'那些你熟悉却又叫不上名字的歌'
          }
        ]
      ],
      ownlist:[

        [
          {
            src:"http://p1.music.126.net/2SygBJFQFPnaqpKyhTVETg==/18591642115916486.jpg?param=292y164",
            txt:'独家专访R3hab:成功需要不断试错'
          },
          {
            src:"http://p1.music.126.net/mkBmkzTBw_t910NWuutysw==/18636722092639157.jpg?param=292y164",
            txt:'探索频道 第161期 开腔吧，老铁！'
          }
        ],
        [
          {
            src:"http://p1.music.126.net/yPboa5TmOtXYt1ogh_wytg==/19013854579158961.jpg?param=600y222",
            txt:'古风音乐团队平沙落雁全新作品《雁锦》独家上线'
          }
        ]
      ]
    }
  }




// http://p1.music.126.net/AxYqcCZYY5e_Qxa1HK80Gg==/109951162876638337.jpg?param=190y190
// http://p1.music.126.net/TSdh9AakhPbjI6JDcOkqmQ==/19056735532640876.jpg?param=190y190
// http://p1.music.126.net/sQKLXBR_GThk5n-M2wtdDg==/758663033420897.jpg?param=190y190
// http://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg?param=190y190
// http://p1.music.126.net/TT0MxuY6JOBeVh6H-Wfd1Q==/18192519393706276.jpg?param=190y190
// http://p1.music.126.net/8GfeP32OYMILxOZKaq10Fw==/19066631137284090.jpg?param=190y190


  handleClick(e){
    this.state.idx = e;
    this.setState(this.state);
    let node = findDOMNode(this);
    typeof this.props.click === "function" && this.props.click.apply(this,arguments);
  }

  render(){
    return <div>
              <TabSlide select_index="0" loop="true">
                <div>
                  <img src="http://p4.music.126.net/jWraEUGlNg0uUfVlDlp_MQ==/18886311230335953.jpg?param=640y236" width="100%"/>
                </div>
                <div>
                  <img src="http://p4.music.126.net/dni5G2_Y9Jm1F7t1swyJ1g==/19069929672176577.jpg?param=640y236" width="100%"/>
                </div>
                <div>
                  <img src="http://p4.music.126.net/3Jk1jMOR0sMpZCynvzG1gg==/18667508418147548.jpg?param=640y236" width="100%"/>
                </div>
                <div>
                  <img src="http://p4.music.126.net/05yK8xGNag9jYbB5dllcFg==/18641120139155543.jpg?param=640y236" width="100%"/>
                </div>
                <div>
                  <img src="http://p4.music.126.net/fXT1Pp-nH07tXGgNdsj1Ag==/18560855790324724.jpg?param=640y236" width="100%"/>
                </div>
                <div>
                  <img src="http://p3.music.126.net/DXdamihS6C2ZH10zrTDHdA==/18691697674032972.jpg?param=640y236" width="100%"/>
                </div>
                <div>
                  <img src="http://p3.music.126.net/Dk3rFWpM5abl-HHBuVCPvA==/18956679974509780.jpg?param=640y236" width="100%"/>
                </div>

              </TabSlide>
              <div className="tab-container">
                <div>
                  <img src={require('./img/t_recommend_icn_daily.png')} width="80%" />
                  <div>私人FM</div>
                </div>
                <div>
                  <img src={require('./img/t_recommend_icn_fm.png')} width="80%" />
                  <div>每日歌曲推荐</div>
                </div>
                <div>
                  <img src={require('./img/t_recommend_icn_rank.png')} width="80%" />
                  <div>云音乐热歌榜</div>
                </div>
              </div>
              <UnitContainer title="推荐歌单" list={this.state.mlist} />
              <UnitContainer title="独家放送" list={this.state.ownlist} />
           </div>
  }
}
