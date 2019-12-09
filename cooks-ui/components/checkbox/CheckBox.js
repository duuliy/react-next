import React, {
    PureComponent
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import RcCheckbox from 'rc-checkbox';
import cls from 'classnames'

export default class CheckBox extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            prefixCls: "cooks-checkbox",
            checked: props.checked || props.defaultChecked
        }
        this.rcCheckbox=''
    }

    static defaultProps = {
        defaultChecked: false,
        indeterminate: false,
        checked: false,
        disabled: false
    }

    static propTypes = {
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        indeterminate: PropTypes.bool
    }

    saveCheckbox = (node) => {
        this.rcCheckbox = node
      };
    
    focus() {
      this.rcCheckbox.focus()
    }
    
    blur() {
      this.rcCheckbox.blur()
    }

    _onChange(that){
        const {onChange,disabled}=that.props
        if(disabled) return
        that.setState(({ checked }) => {
            return {
              checked: !checked
            }
          })
        if(onChange)onChange()
    }

    render() {
        const {prefixCls,checked}=this.state
        const {
            children,
            className,
            indeterminate,
            disabled,
            attr
        }=this.props

        const classString = cls(className, {
            [`${prefixCls}-wrapper`]: true,
            [`${prefixCls}-wrapper-checked`]: checked,
            [`${prefixCls}-wrapper-disabled`]: disabled,
        });
        const checkboxClass = cls({
            [`${prefixCls}-indeterminate`]: indeterminate,
        });

        return ( <label
            className={classString}
            {...attr}
            >
            <RcCheckbox
              onChange={()=>{this._onChange(this)}}
              prefixCls={prefixCls}
              className={checkboxClass}
              ref={this.saveCheckbox}
            /> 
            {children !== undefined && < span > {children} </span>} 
            </label>
            )

        }
    }