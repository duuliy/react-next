/**
 * @name react-PictureBrowser
 * @description 仿百度的图片搜索查看器，但是可以无限列表
 * @author Duuliy <715181149@qq.com>
 * @license MIT
 */

import React, { useRef, useEffect, useState } from 'react'
import './style.less'
import './restCss.less'

const PrefixCls = 'picture-browser'

const debounce = (fn, wait = 100, options) => {
  let timer
  return function () {
    if (options && !timer) {
      fn.apply(this, arguments)
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

const maxPicLen = 100
const tount = 200
const liAndMrWidth = 135
const BIG = 'big'
const SMALL = 'small'
const PictureBrowser = () => {
  const [isShowArea, setIsShowArea] = useState(true)
  const [picIdx, setPicIdx] = useState(1)
  const [current, pageSize] = useState({ current: 1, pageSize: 30 })
  const [dataList, setDataList] = useState([])
  const totalLen = dataList.length

  const getDom = () => {
    return {
      browserContNode: document.querySelector('.browser-cont-wrap'),
      picLongNode: document.querySelector('#pic-long-list'),
      carouselNode: document.querySelector('#carousel-cont-show')
    }
  }

  const changePicSize = (type) => {
    const { carouselNode } = getDom()
    let _width, _height
    if (type === BIG) {
      _width = parseInt(carouselNode.offsetWidth * 1.2)
      _height = parseInt(carouselNode.offsetHeight * 1.2)
    } else {
      _width = parseInt(carouselNode.offsetWidth * 0.8)
      _height = parseInt(carouselNode.offsetHeight * 0.8)
    }

    carouselNode.style.width = _width + 'px'
    carouselNode.style.height = _height + 'px'
  }

  const getDomImDeg = (el) => {
    const tr = window.getComputedStyle(el, null).getPropertyValue("transform")
    if (tr === 'none') return 90
    const values = tr.split('(')[1].split(')')[0].split(',')
    const a = values[0]
    const b = values[1]
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI))
    return angle + 90
  }

  const rotatePic = () => {
    const { carouselNode } = getDom()
    const _deg = getDomImDeg(carouselNode)
    carouselNode.style.transform = 'rotate(' + _deg + 'deg)'
  }

  // const getPreMoreList = () => {
  //   const firstIdx = dataList[0].src - 0
  //   if (firstIdx >= 0) {
  //     setDataList(pre => {
  //       const arr = []
  //       for (let i = firstIdx - 1; i > firstIdx - 31; i--) {
  //         const obj = { src: i + 1 }
  //         arr.unshift(obj)
  //       }
  //       pre.splice(70, arr.length - 1)
  //       return [...arr, ...pre]
  //     })
  //   }
  // }

  const getNextMoreList = () => {
    let lastIdx = dataList[totalLen - 1].src - 0
    if (tount - lastIdx > 0) {
      //查接口如果没有就不管,真实接口只返回剩下的
      setDataList(pre => {
        if (lastIdx + 31 > 200) lastIdx = 169
        const arr = []
        for (let i = lastIdx + 1; i < lastIdx + 31; i++) {
          const obj = { src: i + 1 }
          arr.push(obj)
        }

        return [...pre, ...arr]
      })
    }
  }

  const getPrevCarousel = () => {
    const { picLongNode } = getDom()
    if (picIdx > 0) {
      setPicIdx(pre => {
        if (pre > 1){
          picLongNode.style.left = (picLongNode.offsetLeft + liAndMrWidth) + 'px'
          return --pre
        }else{
          picLongNode.style.left = 0
          return 1
        }
      })
    }
  }

  const getNextCarousel = () => {
    const { browserContNode, picLongNode } = getDom()
    if (picIdx < tount-1) {
      setPicIdx(pre => ++pre)
      getNextMoreList()
      picLongNode.style.left = (picLongNode.offsetLeft - liAndMrWidth) + 'px'
    } else {
      picLongNode.style.left = -picLongNode.offsetWidth + browserContNode.offsetWidth + 'px'
    }
  }

  //维护一个队列
  const getPrevBrowser = () => {
    const { browserContNode, picLongNode } = getDom()
    if (picIdx > 10) {
      setPicIdx(pre => pre -= 10)
      picLongNode.style.left = (picLongNode.offsetLeft + browserContNode.offsetWidth) + 'px'
    } else {
      picLongNode.style.left = 0
      setPicIdx(1)
    }
  }

  const getNextBrowser = () => {
    const { browserContNode, picLongNode } = getDom()
    if (picIdx + 10 < tount) {
      setPicIdx(pre => pre += 10)

      getNextMoreList()
      picLongNode.style.left = (picLongNode.offsetLeft - browserContNode.offsetWidth) + 'px'
    } else {
      picLongNode.style.left = -picLongNode.offsetWidth + browserContNode.offsetWidth + 'px'
      setPicIdx(tount - 1)
    }

  }

  const init = () => {
    const arr = []
    for (let i = 0; i < maxPicLen; i++) {
      const obj = { src: i + 1 }
      arr.push(obj)
    }
    setDataList(arr)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className={PrefixCls}>
      <section className={`${PrefixCls}-infinite-carousel ${isShowArea ? '' : 'highHeight'}`}>
        <div className='carousel-prev' onClick={getPrevCarousel}>{'<'}</div>
        <div className='carousel-next' onClick={getNextCarousel}>{'>'}</div>
        <div className='carousel-cont-wrap'>
          <div className='carousel-cont' id='carousel-cont-show'>
            {dataList && dataList.length && dataList.find(v => v.src === picIdx)?.src}
          </div>
        </div>
      </section>
      <section className={`${PrefixCls}-functional-area`}>
        <div className='btn' onClick={() => setIsShowArea(pre => !pre)}>
          图片列表
        </div>
        <div className='btn' onClick={() => changePicSize(SMALL)}>
          缩小
        </div>
        <div className='btn' onClick={() => changePicSize(BIG)}>
          放大
        </div>
        <div className='btn'>
          原始尺寸
        </div>
        <div className='btn' onClick={() => rotatePic(BIG)}>
          旋转
        </div>
        <div className='btn'>
          下载
        </div>
        <div>
          {`${picIdx}/${tount}`}
        </div>
      </section>
      {/* 从前或者从后数第6张放中间，大于或小于不动 */}
      <section className={`${PrefixCls}-browser-menu`}>
        <div className='browser-prev' onClick={getPrevBrowser}>{'<'}</div>
        <div className='browser-next' onClick={getNextBrowser}>{'>'}</div>
        <div className='browser-cont-wrap'>
          <ul id='pic-long-list'>
            {dataList && dataList.length && dataList.map((v, i) => (
              <li key={i} className={picIdx == v.src ? 'li-red' : ''} onClick={() => {
                console.log(v.src)
                setPicIdx(v.src)
              }}>
                <div>
                  {v.src}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}


export default PictureBrowser
