import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import { throttle } from 'lodash'
import styles from './style.module.scss'

const Guide = ({ targetSelector, children, goNext, closeGuide }) => {
  const [targetNodeImStyle, setTargetNodeImStyle] = useState({})
  const [toolTipImStyle, setToolTipImStyle] = useState({})

  const getNodeRect = (node) => {
    const maxWidth = document.documentElement.clientWidth
    const curScreenHeight = document.documentElement.scrollTop
    const _nodeGetBoundingClie = node?.getBoundingClientRect() || {},
      top = _nodeGetBoundingClie.top + curScreenHeight,
      right = _nodeGetBoundingClie.right,
      bottom = _nodeGetBoundingClie.bottom,
      left = node.offsetWidth > maxWidth ? 0 : _nodeGetBoundingClie.left,
      width = node.offsetWidth > maxWidth ? maxWidth : node.offsetWidth,
      height = _nodeGetBoundingClie.height

    return {
      top,
      right,
      bottom,
      left,
      width,
      height
    }
  }

  const setGuidePosition = throttle(() => {
    try {
      setTimeout(() => {
        const targetNode = document.querySelector(`.${targetSelector}`)
        const rect = getNodeRect(targetNode)
        setTargetNodeImStyle({
          width: rect?.width || '100%',
          height: rect?.height || 100,
          top: rect?.top,
          left: rect?.left
        })
        const tooltipNode = document.querySelector('#guide-tooltip')
        setToolTipImStyle({
          top: rect?.top - tooltipNode?.offsetHeight - 18
        })
      })
    } catch {
      throw new Error("请传入正确的class")
    }
  }, 300)

  const closeWrap = () => closeGuide && closeGuide()

  useEffect(() => {
    setGuidePosition()
    window.onresize = () => {
      setGuidePosition()
    }
    return () => window.onresize = null
  }, [])

  const btnStyle = {
    marginInlineStart: 8,
    background: '#fff',
    color: '#16B979',
    fontSize: 12,
    borderRadius: 4
  }

  const Guide = () => <>
    <div id='guide-wrap' onClick={closeWrap} className={styles.guideWrap}></div>
    <div id='guide' className={styles.guide} style={targetNodeImStyle}></div>
    <div id='guide-tooltip' className={styles.guideTooltip} style={toolTipImStyle}>
      <p>{children}</p>
      <div className={styles.guideFooter}>
        <Button type='primary' size='small' style={btnStyle} onClick={goNext}>
          跳过
        </Button>
        <Button type='primary' size='small' style={btnStyle} onClick={closeWrap}>
          下一步
        </Button>
      </div>
    </div>
  </>

  return ReactDOM.createPortal(<Guide />, document.querySelector('body'))
}

export default Guide