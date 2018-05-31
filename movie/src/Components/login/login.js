/**
 * Created by Mr.袁 on 2018/1/2.
 */
import React,{Component} from "react";
import "./login.css"
import {Link} from "react-router-dom"
class Login extends Component{
    constructor(){
        super()
        this.state={
            username:""
        }
    }
    remenber(){
        console.log(this.refs.rem_ber.src)
        let arr=this.refs.rem_ber.src.split("/")
        console.log(arr)
        if(arr[arr.length-1]==="u11.png"){
            this.refs.rem_ber.src="/images/u13.png"
        }else{
            this.refs.rem_ber.src="/images/u11.png"
        }
    }
    userStyle(e){
        e.target.style.borderBottom="1px solid black"
    }
    userStyles(e){
        e.target.style.borderBottom="1px solid #7c7c7c"
        this.setState({
            username:e.target.value
        })
    }
    userStyless(e){
        e.target.style.borderBottom="1px solid #7c7c7c"

    }
    render(){
        return (
         <div className="Login">
             <div className="form">
                 <input type="text" ref="username" placeholder="请输入账号" onFocus={this.userStyle.bind(this)} onBlur={this.userStyles.bind(this)}/>
                 <input type="password" placeholder="请输入密码" onFocus={this.userStyle.bind(this)} onBlur={this.userStyless.bind(this)}/>
                 {/*记住密码板块*/}
                 <div className="remenber">
                     <div className="rb_left">
                    <img src="/images/u11.png" ref="rem_ber" onClick={this.remenber.bind(this)}/><label>记住密码</label>
                     </div>
                     <div className="rb_right">
                         <span>忘记密码?</span>
                     </div>
                 </div>
                 {/*登录*/}
                 <div className="login">
                     <Link to={"/Personal/"+this.state.username}><button type="button">登　　录</button></Link>
                 </div>
                 {/*第三方*/}
                 <div className="third_party">
                    <span className="iconfont">&#xe611;</span>
                    <span className="iconfont">&#xe717;</span>
                    <span className="iconfont">&#xe600;</span>
                 </div>
                 {/*没账号立即注册*/}
                 <div className="bottom">
                     <span>还没有账号？点击这里<span className="join"><Link to="/register">加入</Link></span>吧！</span>
                 </div>
             </div>
         </div>
        )
    }
}
export default Login