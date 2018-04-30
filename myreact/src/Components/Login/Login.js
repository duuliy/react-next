/**
 * Created by a on 2018/1/3.
 */
import React,{Component} from "react"

class  Login extends Component{
    loginSuccess(){
        //登录成功
        console.log("登录成功");
        //Events up
        console.log(this.props) //获取到function
        this.props.onChangeStatus();
    }
    render(){
        return(
            <div>
                <h1>Login页面</h1>
                <button onClick={this.loginSuccess.bind(this)}>登录</button>
            </div>
        )
    }
}

export default Login