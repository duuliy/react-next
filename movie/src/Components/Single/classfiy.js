/**
 * Created by a on 2018/1/4.
 */
import React,{Component} from  "react"
import './classfiy.css'

class classfiy extends Component{
    render(){
        return(
            <div className="list">
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default classfiy