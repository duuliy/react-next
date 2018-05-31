import React,{Component} from 'react'
import "whatwg-fetch"
import './YingDetail.css'
import {NavLink} from 'react-router-dom'

class YingDetail extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         data:[]
    //     }
    // }
    // componentWillMount(){
        //axios //ajax
        // fetch
        // fetch("/api/v2/movie/celebrity/1054394").then(res=> {
        //     // console.log(res);
        //     return res.json();
        // }).then(data=>{
        //     console.log(data) //json数据
        //     this.setState({
        //         data:data.avatars.large
        //
        //     })
            // console.log("我是请求回的数据",this.state.data.avatars.small
            // ) //json数据

    //     })
    // }
    changestar(){
        if(this.refs.star.src=="/images/star1.png"){
            this.refs.star.src="/images/star.png"
        }else{
            this.refs.star.src="/images/star1.png"
        }
    }
    render(){
        return(
            <div className="detailbox">
                <div>
                    <NavLink to="/HomePage">
                        <img src="/images/cardleft.png" alt="" />
                    </NavLink>
                    <img src="/images/rose0.png" alt="" />
                    <span className="imgnav">演员</span>
                    <span>不止是Rose,她还是奥斯卡影后</span>
                </div>
                <div>
                    <p>我想大部分影迷都因《泰坦尼克号》认识凯特.温斯莱特</p>
                    <p>这部连续12年霸占全球票房榜首电影也在影迷心中永远留下了</p>
                    <p>"Jack and Rose"</p>
                    <p>凯特.温斯莱特在拍完《泰坦尼克号》之后，一举成名，成为了奥斯</p>
                    <p>卡历史上年龄最小两度入围者</p>
                    <img src="/images/rose1.png" alt=""/>
                </div>
                <div>
                    <p>就在她最炙手可热的时候，她飞快的逃离了好莱坞</p>
                    <p>去拍了几部小成本的艺术片，来寻找自己的感觉</p>
                    <p>正如她自己所说：</p>
                    <p>“我宁愿演舞台剧和英国艺术片，也不想搬到洛杉矶去，在美国大片里打酱油</p>
                    <p>卡历史上年龄最小两度入围者”。</p>
                    <img src="/images/rose2.png" alt=""/>
                </div>
                <div>
                    <p>正是这种清醒和对艺术的不懈追求，才有了</p>
                    <p>6次入围奥斯卡奖与爱美奖（美国电影最高奖）</p>
                    <p>1座奥斯卡小金人</p>
                    <p>11项全球奖提名</p>
                    <p>4个金球奖</p>
                    <p>要知道相比小李子的奥斯卡影帝，她早了整整八年.</p>
                    <img src="images/next.png" alt=""/>
                </div>
                <div>
                    <img src="images/line.png" alt=""/>

                    <h3>1、泰坦尼克号</h3>
                    <p>-Taitannic-</p>
                    <p>导演：詹姆斯 卡梅隆</p>
                    <p>主演：莱昂纳多.迪卡普里奥/凯特.温斯莱特/比利赞恩</p>
                    <img src="/images/rose3.png" alt=""/>
                    <p>(文案...)</p>

                </div>
                <div>
                    <div>
                        <img src="/images/rose3.png" alt=""/>
                    </div>
                    <div className="sixdivright">
                        <p>泰坦尼克号 <span>去看看</span></p>
                        <p>9.1分(豆瓣)</p>
                        <p>194分钟</p>
                        <p>剧情/爱情/灾难</p>
                        <p>
                            <img src="/images/star.png" alt="" onTouchStart={this.changestar.bind(this)} ref="star"/>
                            <button>生成电影卡片</button>
                        </p>
                    </div>
                </div>
                <div></div>

            </div>
        )
    }
}
export default YingDetail