import React, {
  PureComponent
} from 'react'
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
  danger: 'danger',
  info: 'info',
  error: 'error'
}

export default class Button extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-btn"
    }
  }

  static defaultProps = {
    href: "",
    type: types.default,
    htmlType: "button",
    size: sizes.default,
    loading: false,
    disabled: false,
    ghost: false,
  }

  static propTypes = {
    onClick:PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    htmlType: PropTypes.string,
    href: PropTypes.string,
    ghost: PropTypes.bool,
    type: PropTypes.oneOf(Object.values(types)),
    size: PropTypes.oneOf(Object.values(sizes))
  }

  handleClick = e => {
    const { onClick,disabled } = this.props;

    if (!disabled&&onClick) (onClick )(e);
    
  };

  renderButton = () => {
    const {prefixCls}=this.state
    const {
      children,
      type,
      className,
      disabled,
      block,
      size,
      htmlType
    } = this.props

    let sizeCls=''
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }

    const classes=cls(prefixCls, className, {
      [`${prefixCls}-${type}`]: Object.values(types).includes(type),
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${sizeCls}`]: sizeCls
    })

    return <button 
            type={htmlType}
            className = {classes} 
            onClick={this.handleClick}
           > 
           <span>{children}</span> 
          </button>

  }

  render() {

    return this.renderButton()
  }

}
