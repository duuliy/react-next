import React,{Component} from 'react';
import './HomePage.css';
// import { render } from 'react-dom';
// import Slider from '../Slider/Slider';
// import { TabBar, Icon } from 'antd-mobile';
// import TabBar from './TabBar'
import Carousel2 from '../Carousel/Carousel'
// import Lb from '../Lb/Lb'
// import 'element-theme-default';
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

/*import YingDetail from '../YingDetail/YingDetail';*/
class HomePage extends Component {
    render(){
        return(
            <div className="homebox">
                <img src="images/leftnav.png" alt="" className="leftnav"/>
                <div className="shuffer">
                    <Carousel2></Carousel2>
                    {/*<Lb></Lb>*/}
                </div>
                <ul className="middlenav">
                    <li>
                        <NavLink to="/YingDetail">
                            <span>
                              <img src="images/middle1.png" alt=""/>
                            </span>
                            <span>全部影单</span>
                        </NavLink>

                    </li>
                        <li>
                        <NavLink to="/YingDetail">
                        <span>
                          <img src="images/middle3.png" alt=""/>
                        </span>
                        <span>每日卡片</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newflash">
                        <span>
                          <img src="images/middle4.png" alt=""/>
                        </span>
                        <span>院线快讯</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="contentbox">
                        <div>
                            <Link to="/YingDetail">
                                <img src="images/new.png" alt="" />
                                <img src="images/rose.png" alt="" />
                                <span className="imgnav">演员</span>
                                <span>不止是Rose,她还是奥斯卡影后</span>
                            </Link>
                        </div>
                    <div>
                        <Link to="/YingDetail">
                            <img src="images/new.png" alt="" />
                            <img src="images/kehuan.png" alt="" />
                            <span className="imgnav">科幻</span>
                            <span>一言不合就开撕，盘点那些荷尔蒙十足的经典场面</span>
                        </Link>
                    </div>
                </div>
                <div>
                    {/*<TabBar></TabBar>*/}
                </div>
            </div>
        )
    }
}
export default HomePage;