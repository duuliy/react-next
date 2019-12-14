import React, {
  PureComponent
} from 'react'
import './style.less'

import Calendar from 'rc-calendar'
import cls from 'classnames'
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
        <RangeCalendar
          prefixCls={prefixCls}
        />
      </div>
    )
  }
}