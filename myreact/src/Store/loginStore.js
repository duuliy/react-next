/**
 * Created by a on 2018/1/3.
 */
// 调度中心调用对应的回调函数修改store - register
// 数据本身 - 属性
// 通知view - events
//处理事件相关的 EventEmitter 可以发起/触发事件 包含了emit
import dispatcher from "../dispatcher"
import { EventEmitter } from 'events'
class LoginStore extends EventEmitter {
  constructor() {
    super()
    this.isLogin = false
  }
  //  回调函数 - 修改store
  changeLoginStatus() {
    console.log("原本的isLogin-store" + this.isLogin);
    console.log("loginStore的isLogin发生了变化");
    this.isLogin = true;
    console.log("修改后的isLogin-store" + this.isLogin);
    this.emit("change");
  }
  //  getter
  //  分配器
  handleAction(action) {
    switch (action.type) {
      case "LOGINSUCCESS": {
        this.changeLoginStatus();
        break;
      }
    }
  }
}

//1.实例化store
const loginstore = new LoginStore();
//2. 把任务分配
dispatcher.register(loginstore.handleAction.bind(loginstore))
export default loginstore