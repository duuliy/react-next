/**
 * Created by a on 2018/1/3.
 */
import React, {Component} from 'react'
import * as loginActions from '../../Action/loginAction'
import LoginStore from '../../Store/loginStore'

class Login extends Component{
    loginSuccess(){
        //登录逻辑。。
        //登录成功
        console.log("登录成功-view");
        //1.从视图发起一个action
        loginActions.loginSuccess()

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