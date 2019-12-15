import React, {
  PureComponent
} from 'react'
import './style.less'
import RcTable, { INTERNAL_COL_DEFINE } from 'rc-table'
import cls from 'classnames'
import PropTypes from 'prop-types'

export default class Table extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-table"
    }
  }

  static defaultProps = {
  }

  static propTypes = {

  }

  render() {
    const { prefixCls } = this.state
    return (
      <div>
        777
        <RcTable
          prefixCls={prefixCls}
        />
      </div>
    )
  }
}