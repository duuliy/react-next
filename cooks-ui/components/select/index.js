import React, {
  PureComponent
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import cls from 'classnames'
import omit from 'omit.js'
//RcSelect自己还是最好不用这个，老实的自己写,因为css确实太难调整了，但是事件都不用绑定了直接用
import RcSelect, { Option, OptGroup } from 'rc-select';

export default class Select extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: 'cooks-select'
    }
    this.rcSelect=''
  }

  static Option = Option
  static OptGroup2 = OptGroup

  static defaultProps = {
    showSearch:false,
    onFocus:()=>{},
    onBlur:()=>{}
  }

  //很多事件不用加因为直接可以用
  static propTypes = {
    allowClear :PropTypes.bool	,//支持清除 
    disabled:PropTypes.bool	,//是否禁用
    // getPopupContainer:PropTypes.bool	,//菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。示例
    placeholder:PropTypes.string	,//选择框默认文字
    showSearch:PropTypes.bool	,//使单选模式可搜索  
    value:PropTypes.any	,//指定当前选中的条目
    onBlur:PropTypes.func	,//失去焦点时回调
    onChange:PropTypes.func	,//选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数
    onFocus:PropTypes.func	,//获得焦点时回调
    onSearch:PropTypes.func	,//文本框值变化时回调
    onSelect:PropTypes.func	,//被选中时调用，参数为选中项的 value (或 key) 值
  }

  saveSelect = (node) => {
    this.rcSelect = node
  };

  _onChange=()=>{
      this.props.onChange()
  }

  render(){
      const {prefixCls}=this.state
      const {
          showArrow,
          className,
          placeholder,
          showSearch,
          ...attr
      }=this.props

      const classNames = cls(className)

      return <RcSelect
      prefixCls={prefixCls}
      placeholder={placeholder}
      showSearch={showSearch}
      className={classNames}
      {...attr}
      ref={this.saveSelect}
    />
  }

  static getDerivedStateFromProps(nextProps, prevState){
    // if (Reflect.has(nextProps, "value")) {
    //     return {
    //       value: nextProps.value
    //     };
    //   }
    //   return null;
  }

}