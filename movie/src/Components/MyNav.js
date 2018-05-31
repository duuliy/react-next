/**
 * Created by Administrator on 2017/12/29.
 */
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './MyNav.css'
class MyNav extends Component{
  constructor(){
    super()
      this.state={
      data:[
          {"bottomimg1":"/images/bottomnav1.png"},
          {"bottomimg2":"/images/bottomnav4.png"},
          {"bottomimg3":"/images/bottomnav5.png"},
          {"bottomimg4":"/images/me.png"},
      ]
      }
  }
    change(val,event){
    if(val===1){
        this.refs.img2.src="/images/bottomnav4.png"
        this.refs.img3.src="/images/bottomnav5.png"
        this.refs.img4.src="/images/me.png"
        if(this.refs.img1.src==="/images/bottomnav1.png"){
            this.refs.img1.src="/images/bottomnav2.png"
        }else{
            this.refs.img1.src="/images/bottomnav1.png"
        }
    }else if(val===2){
        this.refs.img1.src="/images/bottomnav2.png"
        this.refs.img3.src="/images/bottomnav5.png"
        this.refs.img4.src="/images/me.png"
        if(this.refs.img2.src==="/images/bottomnav3.png"){
            this.refs.img2.src="/images/bottomnav4.png"
        }else{
            this.refs.img2.src="/images/bottomnav3.png"
        }
    }else if(val===3){
        this.refs.img1.src="/images/bottomnav2.png"
        this.refs.img2.src="/images/bottomnav4.png"
        this.refs.img4.src="/images/me.png"
        if(this.refs.img3.src==="/images/bottomnav6.png"){
            this.refs.img3.src="/images/bottomnav5.png"
        }else{
            this.refs.img3.src="/images/bottomnav6.png"
        }
        }else if(val===4){
        this.refs.img1.src="/images/bottomnav2.png"
        this.refs.img2.src="/images/bottomnav4.png"
        this.refs.img3.src="/images/bottomnav5.png"
        if(this.refs.img4.src==="/images/me1.png"){
            this.refs.img4.src="/images/me.png"
        }else{
            this.refs.img4.src="/images/me1.png"
        }
    }
    }
  render(){
    return (
      <div className="bottomnav">
        <nav>
          <ul>
            <li className="item" onTouchStart={this.change.bind(this,1)}>
              <NavLink to="/HomePage">
                <img src={this.state.data[0].bottomimg1} alt="" ref="img1"/>
                <span>发现</span>
              </NavLink>
            </li>
            <li  className="item" onTouchStart={this.change.bind(this,2)}>
              <NavLink to="/Single">
                <img src={this.state.data[1].bottomimg2} alt="" ref="img2"/>
                <span>影单</span>
              </NavLink>
            </li>
            <li  className="item" onTouchStart={this.change.bind(this,3)}>
              <NavLink to="/Search">
                <img src={this.state.data[2].bottomimg3} alt="" ref="img3"/>
                <span>搜索</span>
              </NavLink>
            </li>
              <li  className="item" onTouchStart={this.change.bind(this,4)}>
                  <NavLink to="/Personal">
                      <img src={this.state.data[3].bottomimg4} alt="" ref="img4"/>
                      <span>我</span>
                  </NavLink>
              </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default MyNav