import React, {
  PureComponent
} from 'react'
import './style.less'

import cls from 'classnames'
import Calendar from 'rc-calendar'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import PropTypes from 'prop-types'

export default class DatePicker extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-datepicker"
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
        <Calendar
          prefixCls={prefixCls}
        />
        <RangeCalendar
          prefixCls={prefixCls}
        />
        {/* <RcDatePicker
          prefixCls={prefixCls}
        /> */}
      </div>
    )
  }
}