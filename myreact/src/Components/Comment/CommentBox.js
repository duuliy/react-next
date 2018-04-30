/**
 * Created by a on 2017/12/28.
 */
import React from 'react'
//引入组件
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Login from '../Login/Login2'
import LoginStore from '../../Store/loginStore'
import './comment.css'

class CommentBox extends React.Component{
    constructor(props){
        super(props)//指的是this.props
        this.state={
            // commentData:this.props.data
            commentData: [
                {author:'张三',date:'今天', content: '今天天气很好'},
                {author:'李四',date:'昨天', content: '下暴雨了'},
                {author:'王五',date:'3天前', content: '我要吃蛋糕'},
                {author:'赵六',date:'10天前', content: 'Hello World'}
            ],
            isLogin:LoginStore.isLogin
        }
    }
    getNewComment(comm){
        // console.log(comm)//这是commentfrom里面获得的值
        let currentComment= this.state.commentData;
        currentComment.push(comm)
        //重新赋值，改变state就会重新出发render()
        this.setState({
            commentData:currentComment
        })
    }

    render(){
        // console.log(this.state.commentData);
        // return(
        //     <div>
        //         <h1>CommentBox评论盒子</h1>
        //         <CommentList data2={this.state.commentData}/>
        //         <CommentForm onMyUpdata={this.getNewComment.bind(this)}/>
        //     </div>
        // )

        //  return (<template> - 只能有一个根元素)
        console.log(this.state.commentData);
        if(this.state.isLogin){
            return (
                <div>
                    <h1>CommentBox评论盒子</h1>
                    <CommentList data2={this.state.commentData}/>
                    <CommentForm onMyUpdate={this.getNewComment.bind(this)}/>
                </div>
            )
        }else{
            return(
                <Login/>
            )
        }
    }
}
export default CommentBox