
import React, { PureComponent } from 'react'
import './style.less'
import PropTypes from 'prop-types'
import cls from 'classnames'
import omit from 'omit.js';

const sizes = {
  small: 'small',
  default: 'default',
  large: 'large'
}

const types = {
  primary: 'primary',
  default: 'default',
  warning: 'warning',
  success: 'success',
  error: 'error',
  info: 'info',
  disabled: 'disabled'
}

export default class Button extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            prefixCls: "cooks-btn"
        }
    }

    static defaultProps = {
        href: "",
        type: types.default,
        htmlType: "button",
        size: sizes.default,
        loading: false,
        block: false,
        disabled: false,
        ghost: false,
        hollow: false,
        dashed: false,
        circle: false,
        plain: false
      }

    static propTypes = {
        block: PropTypes.bool,
        hollow: PropTypes.bool,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        dashed: PropTypes.bool,
        circle: PropTypes.bool,
        plain: PropTypes.bool,
        htmlType: PropTypes.string,
        href: PropTypes.string,
        ghost:PropTypes.bool,
        type: PropTypes.oneOf(Object.values(types)),
        size: PropTypes.oneOf(Object.values(sizes))
    }

  render(){
    const {children}=this.props
    return <button className={this.state.prefixCls} type={'cc'}>{children}</button>
  }
}
