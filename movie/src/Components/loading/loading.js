/**
 * Created by Mr.袁 on 2018/1/3.
 */
import React,{Component} from "react"
import "./loading.css"
import {Link} from "react-router-dom"
class Loading extends Component{
    render(){
        return(
            <div className="loading">
                <button type="button"> <Link to="/HomePage">进入APP</Link></button>
            </div>
        )
    }
}
export default Loading