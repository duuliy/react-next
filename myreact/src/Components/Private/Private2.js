/**
 * Created by a on 2018/1/3.
 */
import React,{Component} from "react"
import Login from '../Login/Login2'
import LoginStore from '../../Store/loginStore'

class  Private extends Component {
    constructor(props) {
        super(props)
        //初始化构造函数绑定this指向
        this.updateLogin = this.updateLogin.bind(this);
        this.state = {
            isLogin: LoginStore.isLogin,
        }
    }
    componentWillMount(){
        //  on监听事件
        LoginStore.on("change",this.updateLogin)
    }

    updateLogin(){
        console.log("updateLogin被触发");
        console.log("private2页面---"+LoginStore.isLogin)
        //state - 负责页面状态发生变化 - 重新渲染 render()
        //store - 数据管理
        this.setState({
            isLogin: LoginStore.isLogin
        })
    }


    render(){

        let login;
        if(this.state.isLogin){
            login = (
                <div>
                    <h1>Private222内容</h1>
                </div>
            )
        }else{
            login = (
                <Login/>
            )
        }

        return(
            <div>
                <h1>这是private2页面</h1>
                {login}
            </div>
        )
    }
}

export default  Private