/**
 * Created by a on 2017/12/29.
 */
import React,{Component} from 'react'

class Detail extends Component{
    componentWillMount(){
        // console.log(this.props.match.params.id)
        console.log(this.props.location.query)
        // fetch("URL地址",{
        //这里地址要加api，get请求直接拼接就行
        //     method:"post",
        //     body:JSON.stringify({id:this.props.match.params.id}),
        //     header:{
        //         "Content-Type":"application/json"
        //     },
        // }).then(resp=>{
        //     return  resp.json()
        // }).then(data=>{
        //     //获取到的数据
        // })
    }
    render(){
        // console.log(this.props.location.query.id)
        return(
            <div>
                <h1>产品详情页面</h1>
            </div>
        )
    }
}


export default Detail