import React, { Component } from 'react';
//引入组件
import Search from './Components/Search/Search'
import Single from './Components/Single/Single'
import Personal from "./Components/Personal Center/Personal Center"
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom'
import YingDetail from './Components/YingDetail/YingDetail';
import './App.css';
import MyNav from './Components/MyNav'
import HomePage from './Components/HomePage/HomePage'
import Card from './Components/Card/Card'
import Login from "./Components/login/login"
import Loading from "./Components/loading/loading"
import Register from "./Components/register/register"
import Newflash from "./Components/newsflash/newflash"
import NewList from "./Components/newflashlist/newflash_list"

class App extends Component {
  render() {
      console.log(document.location.href)
      var arr = document.location.href.split("/")
      console.log(arr[arr.length - 1])
      let list
      /*if (arr[arr.length - 1] == "login" || arr[arr.length - 1] == "register" || arr[arr.length - 1] == "") {
          list=<span></span>
          console.log(list)
      }else{
          console.log("2")
          list=<MyNav/>
      }*/
      return (
          <Router>
              <div className="AppBox">
                  <div className="App">
                      <Switch>
                          <Route path="/HomePage" component={HomePage}/>
                          <Route path="/YingDetail" component={YingDetail}/>
                          <Route path="/Card" component={Card}/>
                          <Route path="/Single" component={Single}/>
                          <Route path="/Search" component={Search}/>
                          <Route path="/login" component={Login}/>
                          <Route path="/Personal" exact component={Personal}/>
                          <Route path="/Personal/:username" component={Personal}/>
                          <Route path="/" exact component={Loading}/>
                          <Route path="/register" component={Register}/>
                          <Route path="/newflash" component={Newflash}/>
                          <Route path="/newflash_list" exact component={NewList}/>
                          <Route path="/newflash_list/:id" component={NewList}/>
                      </Switch>
                      <MyNav/>
                  </div>

              </div>
          </Router>
      )
  }
}
export default App
