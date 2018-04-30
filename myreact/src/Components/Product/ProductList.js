/**
 * Created by a on 2017/12/29.
 */
import React,{Component} from 'react'
import 'whatwg-fetch'
import {Link} from 'react-router-dom'
class ProductList extends Component{
    constructor(){
        super()
        this.state={
            product:[]
        }
    }
    componentWillMount(){
        //axios//ajax
        //fetch
        fetch("product.json").then(resp=> {
            console.log(resp)
            return resp.json()
        }).then(data=>{
            console.log(data)
            this.setState({
                product:data
            })
        })

    }

    render(){
        let productarr= this.state.product.map((item,index)=>{
            return(
                <div key={index}>
                    {/*<h1>商品列表页面</h1>*/}
                    <Link to={{
                        pathname:"/Detail/",
                        query:{id:item.id}
                    }}>
                        <h1>产品名称:{item.productname}</h1>
                        <img src={item.imgsrc} alt=""/>
                    </Link>
                </div>
            )
        })
        return(
            <div >
                <h1>商品列表页面</h1>
                {productarr}
            </div>
        )

    }
}

/*参数传递方法：
 * 1. 地址拼接二级路由
 * <Link to={"/Detail/"+item.id}>
 *   路由配置:
 *   Route path="/Detail/:id"
 *   ShowDetail页面: 通过this.props.match.params.id获取变量*/
// 2.参数传递?id=1
// Link:to={{query:{传参}}}
// Route配置:/Detail
// Detail页面:this.props.location.query.id
// 但是这个页面直接打开,会报错，location对象没有传过来的query
// 路径上面没有储存参数的信息
export default ProductList