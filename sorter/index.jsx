import React, { useState } from "react"
import './style.less'

const PrefixCls = 'sorter-inner'
// 仿antd 排序
const Sorter = ({onChange}) => {
  const [activeDir, setActiveDir] = useState('')

  const chanegActiveDir=()=>{
    let _activeDir=''
    if (activeDir ==='ASCE'){
      _activeDir ='DESC'
    } else if (activeDir === 'DESC') {
      _activeDir=''
    }else{
      _activeDir ='ASCE'
    }
    onChange && onChange(_activeDir)
    setActiveDir(_activeDir)
  }

  return (
    <div className={PrefixCls} onClick={chanegActiveDir}>
      <div className={`triangle-top ${activeDir}`} />
      <div className={`triangle-bottom ${activeDir}`} />
    </div>
  )
}

export default Sorter