/**
 * Created by a on 2018/1/3.
 */
import React,{Component} from "react"
import Login from "../Login/Login"

class  Private extends Component {
    constructor(){
        super()
        this.state={
            isLogin:false
        }
    }

    changeLogin() {
        console.log("onChangeStatus 被触发");
        console.log(this);
        //state改变了,render会重新执行
        this.setState({
            isLogin: true
        })
    }

    render(){

        let login;
        if(this.state.isLogin){
            login = (
                <div>
                    <h1>Private内容</h1>
                </div>
            )
        }else{
            login = (
                <Login onChangeStatus = {this.changeLogin.bind(this)}/>
            )
        }

        return(
            <div>
                <h1>这是private页面</h1>
                {login}
            </div>
        )
    }
}

export default  Private