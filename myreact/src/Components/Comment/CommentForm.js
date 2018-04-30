/**
 * Created by a on 2017/12/28.
 */
import React,{Component} from 'react'

class CommentForm extends Component{
    addObj(){
        let newComment={
            author:this.refs.myauthor.value,
            date:'刚刚',
            content:this.refs.mycontent.value,
        }
        this.props.onMyUpdata(newComment);
        this.refs.myauthor.value="";
        this.refs.mycontent.value=''
    }
    render(){
        return(
            <div>
                <h1>Comment Form表单</h1>
                <form>
                    评论人：<input type="text" ref="myauthor"/>
                    <br/>
                    内容:
                    <textarea name="" id="" cols="30" rows="10" ref="mycontent"></textarea>
                    <br/>
                    <button type="button" onClick={this.addObj.bind(this)}>提交留言</button>
                </form>
            </div>
        )
    }
}

export default CommentForm