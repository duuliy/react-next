/**
 * Created by Mr.袁 on 2018/1/3.
 */
import React,{Component} from "react";
import "./register.css"
import {Link} from "react-router-dom"
class Register extends Component{
    remenber(){
        let arr=this.refs.rem_ber.src.split("/");
        if(arr[arr.length-1]==="u11.png"){
            this.refs.rem_ber.src="/images/u13.png";
            this.refs.regist.style.background="#2785df";
            this.refs.regist.disabled=false
            console.log(this.refs)
        }else{
            this.refs.rem_ber.src="/images/u11.png";
            this.refs.regist.style.background="grey";
            this.refs.regist.disabled=true;
            console.log(this.refs)
        }
    }
    abc(){
       console.log("1")
    }
    userStyle(e){
        e.target.style.borderBottom="1px solid black"
    }
    userStyles(e){
        e.target.style.borderBottom="1px solid #7c7c7c"
    }
    render(){
        return (
            <div className="Register">
                <div className="back_top"><Link to="/login">&lt;</Link></div>
              <div className="ct_header">
                  <div className="phone">
                      <label>账号</label>
                      <input type="text" placeholder="请输入手机号" onFocus={this.userStyle.bind(this)} onBlur={this.userStyles.bind(this)}/>
                  </div>
                  <div className="yanzheng">
                      <label>验证码</label>
                      <input type="password" placeholder="请输入验证码" onFocus={this.userStyle.bind(this)} onBlur={this.userStyles.bind(this)}/>
                      <button>获取验证码</button>
                  </div>
                  <div className="password">
                      <label>密码</label>
                      <input type="password" placeholder="请设置密码" onFocus={this.userStyle.bind(this)} onBlur={this.userStyles.bind(this)}/>
                  </div>
                  <div className="agreement">
                       <img src="/images/u11.png" ref="rem_ber" onClick={this.remenber.bind(this)}/><span>我已仔细阅读用户协议</span>
                  </div>
                  <div className="register">
                      <button type="button" ref="regist" onClick={this.abc.bind(this)}><Link to="/login">注　　册</Link></button>
                  </div>
                  <div className="bottom">
                      <span>已有账号？点击这里返回<span className="join"><Link to="/login">登录</Link></span>吧！</span>
                  </div>
              </div>
            </div>
        )
    }
}
export default Register