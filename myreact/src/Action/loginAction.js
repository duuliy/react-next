/**
 * Created by a on 2018/1/3.
 */
//调用调度中心 - 分发任务 dispatch
// 注册回调函数 - 修改store - register
import dispatcher from '../dispatcher'

export function loginSuccess(){
    console.log("loginSuccess Action被触发")
    //Action告诉dispatcher
    //逻辑
    //把任务丢给调度中心,用dispatch来分配任务
    dispatcher.dispatch({
        //任务名-全大写
        type:"LOGINSUCCESS"
    })
}
