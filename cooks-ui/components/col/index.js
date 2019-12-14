import React, {
  PureComponent
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import RowContext from '../row/RowContext.js'
import cls from 'classnames'

export default class Col extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-col"
    }
  }

  static defaultProps = {
    offset: 0,
    order: 0,
    pull: 0,
    push: 0,
    span: 24
  }

  static propTypes = {
    offset: PropTypes.number,
    order: PropTypes.number,
    pull: PropTypes.number,
    push: PropTypes.number,
    span: PropTypes.number
    // xs: PropTypes.oneOfType([number, object]),
    // sm: PropTypes.oneOfType([number, object]),
    // md: PropTypes.oneOfType([number, object]),
    // lg: PropTypes.oneOfType([number, object]),
    // xl: PropTypes.oneOfType([number, object]),
    // xxl: PropTypes.oneOfType([number, object])
  }

  render() {
    const { prefixCls } = this.state
    const {
      gutter,
      className,
      style,
      span,
      offset,
      order,
      children,
      push,
      pull,
      ...otherProps
    } = this.props;

    const classes = cls(
      prefixCls,
      {
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-push-${push}`]: push,
        [`${prefixCls}-pull-${pull}`]: pull,
      },
      className
    )

    return (
      <RowContext.Consumer>
        {({ gutter }) => {
          console.log(gutter)
          return (
            <div
              className={classes}
              {...otherProps}
            >
              {children}
            </div>
          )
        }}
      </RowContext.Consumer>
    )
  }
}
