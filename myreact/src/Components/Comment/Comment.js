/**
 * Created by a on 2017/12/28.
 */

import React,{Component} from 'react'

class Comment extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <h3>评论人：{this.props.author}</h3>
                <h4>评论时间:{this.props.data}</h4>
                <p>评论内容:{this.props.children}</p>
            </div>
        )
    }
}

export default Comment