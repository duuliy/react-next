/**
 * Created by Mr.袁 on 2018/1/4.
 */
import React,{Component} from "react"
import "./newflash_list.css"
import {Link} from "react-router-dom"
class Newflash_list extends Component{
    constructor(){
        super()
        this.state={
            newlistarr:[],
            a:123
        }
    }
    componentWillMount(){
        fetch("/api/v2/movie/in_theaters").then(res=>res.json()).then((data)=>{
            let arr=data.subjects;
            let arrlist=[];
            for(var i=0;i<data.subjects.length;i++){
                if(data.subjects[i].id==this.props.match.params.id){
                    arrlist.push(data.subjects[i])
                }
            }
            this.setState({
                newlistarr:arrlist
            });
            console.log(this.state.newlistarr)
        })
    }
    render(){
        let newlistarr=this.state.newlistarr.map((item,index)=>{
            return (
                <div key={index}>
                    <div className="newlist_header">
                        <div className="newlist_nav">
                            <span>{item.title}</span>
                        </div>
                        <Link to="/newflash"><span className="new_top">&lt;</span></Link>
                    </div>
                    <div className="newlist_content">
                        <div className="newlist_banner">
                            <img src={item.casts[0].avatars.large}/>
                        </div>
                        <div className="newlist_img">
                              <p>影视演员/花絮主角</p>
                            <img src={item.casts[0].avatars.large}/>
                            <img src={item.casts[1].avatars.small}/>
                            <img src={item.casts[2].avatars.large}/>
                        </div>
                        <div className="newlist_xq">
                            <a href={item.alt}>了解详情&gt;&gt;</a>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                {newlistarr}
            </div>
        )
    }
}
export default Newflash_list