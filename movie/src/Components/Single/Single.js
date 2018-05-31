/**
 * Created by a on 2018/1/3.
 */
import React,{Component} from  "react"
import { i  } from 'element-react'
import './Single.css'
import Fiyarr from './fiyarr'
import {Link} from 'react-router-dom'

class Single extends Component{


    render(){
        let title="类型";
        let title2="地区";
        let title3="标签";
        let commentData=[
            {id:"1",name:'动作'},
            {id:"2",name:'悬疑'},
            {id:"3",name:'喜剧'},
            {id:"4",name:'动画'},
            {id:"5",name:'科幻'},
            {id:"6",name:'爱情'},
            {id:"7",name:'情色'},
            {id:"8",name:'剧情'}
        ];
        let commentData2=[
            {id:"9",name:'内地'},
            {id:"10",name:'香港'},
            {id:"11",name:'美国'},
            {id:"12",name:'英国'},
            {id:"13",name:'韩国'},
            {id:"14",name:'日本'},
            {id:"15",name:'法国'},
            {id:"16",name:'泰国'}
        ];
        let commentData3=[
            {id:"17",name:'热门'},
            {id:"18",name:'心情'},
            {id:"19",name:'导演'},
            {id:"20",name:'演员'},
            {id:"21",name:'文艺'},
            {id:"22",name:'青春'},
            {id:"23",name:'励志'},
            {id:"24",name:'犯罪'}
        ];
        return(
            <div>
                <div className="header">
                    <i className="el-icon-arrow-left"/>
                    <img src="/images/logo.png" alt=""/>
                </div>
                <Link to="/newflash">
                    {/*此处可以用id传参to={"/newflash/"+item.id}*/}
                <div className="mybody">
                    <div className="warp">
                        <Fiyarr title={title} data={commentData}/>
                            <Fiyarr title={title2} data={commentData2}/>
                        <Fiyarr title={title3} data={commentData3}/>

                    </div>
                </div>
                </Link>
            </div>
        )
    }
}

export default Single