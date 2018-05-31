/**
 * Created by a on 2018/1/3.
 */

import React,{Component} from  "react"
import { Button,i  } from 'element-react';
import 'element-theme-default';
import './Search.css'
import 'whatwg-fetch'     //fetch引入
import * as SearchAction from '../../Action/SearchAction'


class Search extends Component{
    constructor(){
        super()
        this.state={
            data2:[]
        }
    }
    //搜索请求，请求可以直接写在store里面
    // addObj(){
    //     let newComment={
    //         author:this.refs.myauthor.value.json()
    //     }
    //     this.refs.myauthor.value="";
    //     fetch("/api/v2/movie/in_theaters",{
    //         method:"post",
    //         body:JSON.stringify({name:newComment.author}),
    //         header:{
    //             "Content-Type":"application/json"
    //         },
    //     }).then(data=>{
    //         console.log(data)
    //         this.setState({
    //             data2:data
    //             //此时让页面显示data即可
    //         })
    //     })
    //    SearchAction.SearchSuccess()
    // }
    render(){
        return(
            <div>
                <from>
                    <div className="headers">
                    <i className="el-icon-arrow-left"/>
                    <input placeholder="电影/演员/标签等关键字" ref="myauthor" className="search"/>
                    <Button ref="mysearch" className="btn" type="primary" icon="search"  size="mini" onClick={this.addObj.bind(this)}>搜索</Button>
                    </div>
                    <div className="content">
                        <div className="hot">
                            热门搜索 <i className="el-icon-view"/>
                        </div>
                        <div className="hotcontent">
                            <span>泰坦尼克号</span>
                            <span>徐克</span>
                            <span>犯罪</span>
                            <span>励志</span>
                            <span>功夫</span>
                            <span>冯小刚</span>
                            <span>警匪</span>
                            <span>青春</span>
                            <span>凯特·温斯莱特</span>
                            <span>太森</span>
                        </div>
                        <div className="history">
                            历史搜索 <i className="el-icon-delete"/>
                        </div>
                        <div className="historycontent">
                            <span>泰坦尼克号</span>
                            <span>速度与激情3</span>
                        </div>
                    </div>
                </from>
            </div>
        )
    }
}

export default Search