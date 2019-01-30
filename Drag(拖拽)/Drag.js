import React from "react";
import './style.less';

const Drag = ( { title,visible } ) => {
  let node = null,
      timer = null,
      isDown = false,
      downX = 0,
      downY = 0,
      left = 0,
      top = 0,
      boundaryX = 0,
      viewWidth = document.body.offsetWidth,
      viewHeight = document.body.offsetHeight;
  const { max,min } = Math;
  const down = ( { target, clientX, clientY } ) => {
    node = target.parentNode.parentNode.parentNode;
    downX = clientX;
    downY = clientY;
    left = node.offsetLeft;
    top = node.offsetTop;
    boundaryX = (viewWidth - node.offsetWidth) / 2;
    isDown = true;
  };
  const move = ( { clientX, clientY } ) => {
    if(!isDown)return;
    let moveX = clientX - downX + left;
    let moveY = clientY - downY + top;
    moveX = max(-boundaryX, min(boundaryX, moveX));
    moveY = max(-node.parentNode.offsetTop, min(viewHeight - node.offsetHeight - node.parentNode.offsetTop - 4, moveY));
    node.style.cssText = `top:${ moveY }px;left:${ moveX }px`;
  };
  const up = () => isDown = false;

  if(!visible){
    clearTimeout(timer);
    timer = setTimeout(() => {
      let node = document.querySelector(`.Drag`).parentNode.parentNode.parentNode;
      node.style.cssText = ``;
    },500);
  }
  document.addEventListener('mousemove',move);
  document.addEventListener('mouseup',up);

  return <p className={`Drag`} onMouseDown={down}>{ title }</p>
};

export default Drag;


//页面上使用方法
// import { Drag } from '../../../components/index.js';
{/* <Modal
          title={<Drag title={`title`} visible={deleteVisible}></Drag>}
          showIcon
          visible={deleteVisible}
          onOk={this.deleteOk}
          onCancel={()=>{this.setState({deleteVisible: false})}}
        >
          <Alert
            description='此操作将删除该文件，是否继续?'
            type="warning"
            showIcon
          />
        </Modal> */}
