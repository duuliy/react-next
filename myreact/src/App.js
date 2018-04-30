import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//引入
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

//1.引入组件
import MyNav from './Components/MyNav'
import CommentBox from './Components/Comment/CommentBox'
import ProductList from './Components/Product/ProductList'
import Detail from './Components/Product/Detail'
import ErrorPage from './Components/404'
import Private from './Components/Private/private'
import Private2 from './Components/Private/Private2'


class App extends Component {
  render() {
      // let commentarr = [
      //     {author:'张三',date:'今天', content: '今天天气很好'},
      //     {author:'李四',date:'昨天', content: '下暴雨了'},
      //     {author:'王五',date:'3天前', content: '我要吃蛋糕'},
      //     {author:'赵六',date:'10天前', content: 'Hello World'}=
      // ]
    return (
        <Router>
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                <h1>APP页面</h1>
                <MyNav/>
                {/*Swith只匹配第一个满足的,二级路由和精准路由要写在前面*/}
                <Switch>
                    <Route path="/Comment" component={CommentBox}/>
                    <Route path="/ProductList" component={ProductList}/>
                    <Route path="/Detail" component={Detail}/>
                    {/*//path:路径  component:组件*/}
                    {/*exact满足一个条件就直接进去*/}
                    {/*<CommentBox data={commentarr}/>*/}
                    <Route path="/myPage" render={()=><h3>my Page</h3>}></Route>
                    <Route path="/Private" component={Private}/>
                    <Route path="/Private2" component={Private2}/>
                    <Route path="/404" component={ErrorPage}/>
                    {/*<Redirect to="/404"/>*/}
                </Switch>

            </div>
        </Router>

    );
  }
}

export default App;
