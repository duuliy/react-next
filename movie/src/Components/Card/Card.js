import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import './Card.css'
class Card extends Component{
    render(){
        return(
            <div className="cardbox">
                <div className="cardhead">
                    <div>
                        <NavLink to="/HomePage">
                         <img src="images/cardleft.png" alt=""/>
                        </NavLink>
                            <span>每日卡片</span>
                        <img src="images/cardshare.png" alt=""/>

                    </div>
                </div>
                <div className="cardcontent">
                    <img src="images/card1.png" alt=""/>
                    <p>"You jump,I jump".以你之姓，管我之名，原是</p>
                    <p>最美丽的情话</p>
                    <p>-----《泰坦尼克号》</p>
                </div>
                <div className="bomicon">
                    <img src="images/lefticon.png" alt=""/>
                    <img src="images/star.png" alt=""/>
                    <img src="images/beizhu.png" alt=""/>
                </div>
            </div>

        )
    }
}
export default Card