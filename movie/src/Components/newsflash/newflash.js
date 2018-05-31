/**
 * Created by Mr.袁 on 2018/1/4.
 */
import React,{Component} from "react"
import "./newflash.css"
import "whatwg-fetch"
import {Link} from "react-router-dom"
class Newflash extends Component{
    constructor(){
        super()
        this.state={
            newarr:[],
        }
    }
    componentWillMount(){
        console.log("1");
        fetch("/api/v2/movie/in_theaters").then(res=>res.json()).then((data)=>{
            let arr=data.subjects;
            this.setState({
                newarr:arr
            });
            console.log(this.state.newarr)
        })
    }
    render(){
        let new_flash=this.state.newarr.map((item,index)=>{
            let newtime=item.rating.stars*4;
            return (
                <Link key={index} to={"/newflash_list/"+item.id}>
                <div  className="item_content">
                   <div className="item_lfcontent">
                       <img src={item.images.large} />
                   </div>
                    <div className="item_rgcontent">
                        <div className="rg_pl">
                            <span>{item.rating.average}(豆瓣)</span>
                        </div>
                        <div className="rg_content">
                            <h5>{item.title}</h5>
                            <p>{item.original_title}</p>
                            <div className="rg_time">
                                <p>{item.year}.6.24(大陆)</p>
                                <p>{newtime}分钟</p>
                                <p>{item.genres[0]}/{item.genres[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            )
        })
        return (
            <div>
                {/*头部*/}
                <div className="header">
                    <div className="new_nav">
                        <span>热映</span>
                        <span>待映</span>
                    </div>
                    <span className="new_top">&lt;</span>
                </div>
                {/*内容部分*/}
                <div className="news_content">
                    {new_flash}
                </div>
            </div>
        )
    }
}
export default Newflash