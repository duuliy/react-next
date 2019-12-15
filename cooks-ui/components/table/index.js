import React, {
  PureComponent
} from 'react'
import './style.less'
import RcTable, { INTERNAL_COL_DEFINE } from 'rc-table'
import cls from 'classnames'
import Pagination from "../pagination";
import PropTypes from 'prop-types'

export default class Table extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-table",
      current: 1,
      dataSource: []
    }
  }

  static defaultProps = {
    defaultCurrent: 1,
    defaultPageSize: 20,
    pageSize: 20,
    total: 0,
    onChange: () => { }
  }

  static propTypes = {
    // current: PropTypes.number,
    defaultCurrent: PropTypes.number,
    defaultPageSize: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number,
    onChange: PropTypes.func,
    onShowSizeChange: PropTypes.func,
    columns: PropTypes.array,
    data: PropTypes.array
  }
  //   current	当前页数	number	-	
  // defaultCurrent	默认的当前页数	number	1	
  // defaultPageSize	默认的每页条数	number
  // pageSize	每页条数	number	
  //   total	数据总数	number	0	
  // onChange	页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize)	noop	
  // onShowSizeChange	pageSize 变化的回调	Function(current, size)

  _onChange = (current, pageSize) => {
    this.setState({ current })
    this.props.onChange(current, pageSize)
  }

  render() {
    const {
      prefixCls,
      current,
      dataSource
    } = this.state
    const {
      // current,
      defaultCurrent,
      defaultPageSize,
      pageSize,
      total,
      onChange,
      onShowSizeChange,
      columns,
      data
    } = this.props
    console.log(dataSource)
    return (
      <div>
        <RcTable
          prefixCls={prefixCls}
          columns={columns}
          data={dataSource}
        />

        <Pagination
          current={current}
          total={total}
          onChange={this._onChange}
        />
      </div>
    )
  }
  static getDerivedStateFromProps({ pageSize, data }, { current }) {
    if (current) {
      const nextNum = (current * pageSize).toFixed()
      const prevNum = (nextNum - pageSize).toFixed()
      const dataSource = data.slice(prevNum, nextNum)
      return {
        dataSource
      }
    }
    return null;
  }
}