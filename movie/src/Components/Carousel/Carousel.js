import React,{Component} from 'react';
import { Carousel } from 'element-react';

import 'element-theme-default';
class BannerCarousel extends Component {
    constructor(){
        super()
        this.state={
            data:["/images/banner1.png",
                "/images/banner2.png",
                "/images/banner3.png"]
        }
    }
    render() {
        return (
            <div className="demo-1 small">
                <div className="block">
                    <Carousel height="220px">
                        {
                            this.state.data.map((item, index) => {
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={item} alt=""/>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        )
    }
}
export  default  BannerCarousel;
