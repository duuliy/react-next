/**
 * Created by a on 2018/1/4.
 */
import React,{Component} from  "react"
import './Personal Center.css'
import 'element-theme-default';
import { Button } from 'element-react';
import {Link} from "react-router-dom"
class Personal  extends Component{
    constructor(){
        super()
        this.state={
           name:""
        }
    }
    componentWillMount(){
        this.setState({
            name:this.props.match.params.username
        })
    }
    render(){
        return(
           <div>
               <div className="top">
                   <div className="head">
                       <img src="/images/1.png" alt=""/>
                       <img src="/images/2.png" alt=""/>
                       <h4>{this.state.name}</h4>
                       <p>梦想始于剧本,而终结于电影</p>
                   </div>
                   <div className="toptwo">
                       <div className="listt onee">
                           <p>18</p>
                           <p>&#xe881;</p>
                       </div>
                       <div className="listt twoe">
                           <p>99</p>
                           <p>&#xe6ae;</p>
                       </div>
                       <div className="listt threee">
                           <p>27</p>
                           <p>&#xe6c4;</p>
                       </div>
                   </div>
               </div>
               <div className="mbottom">
                   <div className="mySinglee">
                       <p><span>&#xe619;</span>我的影单<span>&#xe657;</span></p>
                   </div>
                   <div className="mySinglee">
                       <p><span>&#xe62a;</span>我的电影卡片<span>&#xe657;</span></p>
                   </div>
                   <div className="mySinglee">
                       <p><span>&#xe655;</span>设置<span>&#xe657;</span></p>
                   </div>
                   <div className="mySinglee">
                       <p><span>&#xe600;</span>关于<span>&#xe657;</span></p>
                   </div>
               </div>
               <Link to="/login"><Button ref="mysearch" className="mbtn" type="primary" >退出登录</Button></Link>
           </div>
        )
    }
}

export default Personal