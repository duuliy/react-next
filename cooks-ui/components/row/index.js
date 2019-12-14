import React, {
  PureComponent
} from 'react'
import './style.less'
import cls from 'classnames'
import PropTypes from 'prop-types'
import RowContext from './RowContext.js'


export default class Row extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-row"
    }
  }

  static defaultProps = {
    gutter: 24,
    align: 'top',
    justify: 'start'

  }

  static propTypes = {
    align: PropTypes.string,
    gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),  //xs sm md 响应式
    justify: PropTypes.string,
    type: PropTypes.oneOf(['flex'])  //可选flex
  }

  render() {
    const { prefixCls } = this.state
    const {
      gutter,
      children,
      type,
      justify,
      align,
      className,
      ...otherProps
    } = this.props

    const classes = cls(
      {
        [prefixCls]: !type,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${type}-${justify}`]: type && justify,
        [`${prefixCls}-${type}-${align}`]: type && align,
      },
      className,
    )
    return (
      <RowContext.Provider value={{ gutter }}>
        <div
          {...otherProps}
          className={classes}
        >
          {children}
        </div>
      </RowContext.Provider>
    )
  }
}
