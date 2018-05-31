/**
 * Created by a on 2018/1/4.
 */
import React,{Component} from  "react"
// import { i  } from 'element-react';
import Classfiy from './classfiy'
import './fiyarr.css'

class fiyarr extends Component{
    render(){
        console.log(this.props.data);
        let arr = this.props.data.map((item)=>{
            return (
                <Classfiy key={item.id} name={item.name}/>
            )
        })
        return(
            <div className="arrow">
                <div className="title">
                    <div className="line one"/>
                    <p>{this.props.title}</p>
                    <div className="line two"/>
                </div>
                <div className="content">
                    {arr}
                </div>
            </div>

        )
    }
}

export default fiyarr