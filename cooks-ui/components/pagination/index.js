import React, {
  PureComponent
} from 'react'
import './style.less'
import RcPagination from 'rc-pagination'
import cls from 'classnames'
import PropTypes from 'prop-types'


export default class Pagination extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-pagination"
    }
  }

  static defaultProps = {
  }

  static propTypes = {

  }

  render() {
    const { prefixCls } = this.state
    const {
      className,
      ...otherProps
    } = this.props
    return (
      <RcPagination
        prefixCls={prefixCls}
        {...otherProps}
        className={cls(className)}
      />
    )
  }
}