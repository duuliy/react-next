import { Component } from 'react'
import { cloneDeep } from 'lodash'
import { Select, Input } from 'antd'
import './style.less'

const Option = Select.Option
let treeIndex = 9
let treeContsIndex = 9
const addGroupSelect = [
  {
    name: 'and',
    val: '1'
  },
  {
    name: 'or',
    val: '2'
  },
  {
    name: 'not',
    val: '3'
  }
]

const groupTest = [
  {
    name: '大',
    val: '1'
  },
  {
    name: '小',
    val: '2'
  }
]
export default class SetRules extends Component {
  state = {
    PrefixCls: 'SetRules',
    treeList: [{
      id: 'group1',
      fatherId: null,
      operatSymbol: '1',
      childNode: [
        {
          id: 'group2',
          fatherId: 'group1',
          operatSymbol: '1',
          childNode: [
            {
              id: 'group4',
              fatherId: 'group2',
              operatSymbol: '1',
              conts: [
                {
                  contId: 'cont1',
                  type: '1',
                  linkSymbol: '1',
                  inputVal: ''
                }
              ]
            },
            {
              id: 'group5',
              fatherId: 'group2',
              operatSymbol: '1',
              conts: [
                {
                  contId: 'cont2',
                  type: '1',
                  linkSymbol: '1',
                  inputVal: ''
                }
              ]
            }
          ]
        },
        {
          id: 'group7',
          fatherId: 'group1',
          operatSymbol: '1',
          conts: [
            {
              contId: 'cont4',
              type: '1',
              linkSymbol: '1',
              inputVal: ''
            }
          ]
        }
      ]
    }]
  }

  getIdToCont=()=>{
    const contId = treeContsIndex++
    return {
      contId: `cont${contId}`,
      type: '1',
      linkSymbol: '1',
      inputVal: ''
    }
  }

  getIdToGroup=fatherId=>{
    const id = treeIndex++
    const contId = treeContsIndex++
    return {
      operatSymbol: '1',
      id: `group${id}`,
      fatherId,
      conts: [
        {
          contId: `cont${contId}`,
          type: '1',
          linkSymbol: '1',
          inputVal: ''
        }
      ]
    }
  }

  addIdToCont=(treeList, id)=>{
    treeList.forEach(v=>{
      if(v.id === id){
        v.conts.push(this.getIdToCont())
        return void(0)
      }else{
        v.childNode && this.addIdToCont(v.childNode, id)
      }
    })
    return treeList
  }

  //待优化
  addIdToGroup=(treeList, id, fatherId)=>{
    if(!fatherId){ //树顶级
      const _treeList = this.getIdToGroup(null)
      treeList[0].fatherId = _treeList.id
      _treeList.childNode = treeList
      _treeList.childNode.push(this.getIdToGroup(_treeList.id))
      return [_treeList]
    }
    treeList.forEach((v, i)=>{
      if(v.id === fatherId){
        let sub = 0
        v.childNode.find((k, v)=>k.id === id && (sub = v)) //拿下标
        v.childNode.splice(sub + 1, 0, this.getIdToGroup(fatherId))
        return void(0)
      }else{
        v.childNode && this.addIdToGroup(v.childNode, id, fatherId)
      }
    })
    return treeList
  }

  addGroupCont=(id)=>{
    this.setState({
      treeList: this.addIdToCont(cloneDeep(this.state.treeList), id)
    })
  }

  addSelectGroup=(id, fatherId)=>{
    this.setState({
      treeList: this.addIdToGroup(cloneDeep(this.state.treeList), id, fatherId)
    })
  }

  delIdToCont=(treeList, contId, id)=>{
    treeList.forEach(v=>{
      if(v.id === id){
        v.conts = v.conts.filter(j=>j.contId !== contId)
        return void(0)
      }else{
        v.childNode && this.delIdToCont(v.childNode, contId, id)
      }
    })
    return treeList
  }

  delIdToFartherCont=(treeList, id)=>{
    let saveTreeList = []
    const delIdToFartherContCB = (treeList, id)=>{
      treeList.forEach((v, i)=>{
        if(v.id === id){
          treeList.splice(i, 1)
          treeList && treeList.length && (saveTreeList = treeList)
          return void(0)
        }else{
          v.childNode && delIdToFartherContCB(v.childNode, id)
        }
      })
      return treeList
    }
    const _treeList = delIdToFartherContCB(treeList, id)
    if(saveTreeList.length > 1){
      //剩下的是多个组
      return _treeList
    }
    //剩下的是单个组
    return saveTreeList
  }

  changeFaToCont=(treeList, saveTreeList, fatherId)=>{
    let faFatherId = null
    let faFatherIndex = null
    const getFaFatherId = (treeList, fatherId)=>{
      treeList.forEach((v, i)=>{
        if(v.id === fatherId){
          if(v.fatherId){
            faFatherId = v.fatherId
            faFatherIndex = i
          }
        }else{
          v.childNode && getFaFatherId(v.childNode, fatherId)
        }
      })
    }

    const changeFaToContCb = (treeList, faFatherId)=>{
      treeList.forEach((v, i)=>{
        if(v.id === faFatherId){
          saveTreeList.forEach(j=>j.fatherId = v.id)
          v.childNode.splice(faFatherIndex, 1, ...saveTreeList)
        }else{
          v.childNode && changeFaToContCb(v.childNode, faFatherId)
        }
      })
      return treeList
    }

    getFaFatherId(treeList, fatherId)
    if(Object.prototype.toString.call(faFatherIndex) === '[object Number]'){
      //不是顶级
      return changeFaToContCb(treeList, faFatherId)
    }else{
      //是顶级
      saveTreeList.forEach(v=>v.fatherId = null)
      return [...saveTreeList]
    }
  }

  delGroupCont=(contId, fatherItem)=>{
    let treeList = []
    if(fatherItem.conts.length === 1){ //只有1个时连条件的父级一起删除
      const saveTreeList = this.delIdToFartherCont(cloneDeep(this.state.treeList), fatherItem.id)
      treeList = this.changeFaToCont(cloneDeep(this.state.treeList), saveTreeList, fatherItem.fatherId)
      this.setState({ treeList: treeList })
      return void(0)
    }
    treeList = this.delIdToCont(cloneDeep(this.state.treeList), contId, fatherItem.id)
    this.setState({ treeList })
  }

  setGroupOperatSymbol=(treeList, e, id)=>{
    treeList.forEach(v=>{
      if(v.id === id){
        v.operatSymbol = e
        return void(0)
      }
      v.childNode && this.setGroupOperatSymbol(v.childNode, e, id)
    })
    return treeList
  }

  setContSubscript=(treeList, e, id, contId, subscript)=>{
    treeList.forEach(v=>{
      if(v.id === id){
        v.conts.forEach(j=>{
          if(j.contId === contId) j[subscript] = e
        })
        return void(0)
      }
      v.childNode && this.setContSubscript(v.childNode, e, id, contId, subscript)
    })
    return treeList
  }

  onChangeSelectGroup=e => id=>{
    this.setState({
      treeList: this.setGroupOperatSymbol(cloneDeep(this.state.treeList), e, id)
    })
  }

  onChangeSelectCont=e=>id=>contId=>subscript=>{
    const treeList = this.setContSubscript(cloneDeep(this.state.treeList), e, id, contId, subscript)
    this.setState({ treeList })
  }

  renderTreeCont=fatherItem=>{
    return fatherItem.conts && fatherItem.conts.length ? fatherItem.conts.map((item, i)=>(
      <div className='selectGroup_cont_contCol'>
        <Select style={{ width: 100 }} value={item.type || groupTest[0]} onChange={e=>this.onChangeSelectCont(e)(fatherItem.id)(item.contId)('type')}>
          {
            groupTest.map(v => <Option value={ v.val } key={ v.val }>{ v.name }</Option>)
          }
        </Select>
        <Select style={{ width: 100 }} value={item.linkSymbol || groupTest[0]} onChange={e=>this.onChangeSelectCont(e)(fatherItem.id)(item.contId)('linkSymbol')}>
          {
            groupTest.map(v => <Option value={ v.val } key={ v.val }>{ v.name }</Option>)
          }
        </Select>
        <Input style={{ width: 100 }} placeHolder='请输入' value={item.inputVal} onChange={e=>this.onChangeSelectCont(e.target.value)(fatherItem.id)(item.contId)('inputVal')} />
        <div className='addAndDel'>
          <span onClick={()=>this.addGroupCont(fatherItem.id)}>+</span>
          <span onClick={()=>this.delGroupCont(item.contId, fatherItem)}>-</span>
        </div>
      </div>
    )) : null
  }

  renderTree=treeList=>{
    return treeList && treeList.length > 0 ? treeList.map(item=>
      (
        <div className={`selectGroup ${!item.fatherId ? 'selectGroupLine' : null}`}>
          <div className='selectGroup_head'>
            <Select value={item.operatSymbol || addGroupSelect[0]} onChange={e=>this.onChangeSelectGroup(e)(item.id)}>
              {
                addGroupSelect.map(v => <Option value={ v.val } key={ v.val }>{ v.name }</Option>)
              }
            </Select>
            <span onClick={()=>this.addSelectGroup(item.id, item.fatherId)}>添加组</span>
          </div>
          <div className='selectGroup_cont'>
            {item.childNode && item.childNode.length > 0
              ? this.renderTree(item.childNode)
              : this.renderTreeCont(item)
            }
          </div>
        </div>
      )
    ) : null
  }

  render () {
    const { PrefixCls, treeList } = this.state
    return (
      <div className={PrefixCls}>
        {this.renderTree(treeList)}
      </div>
    )
  }

}
