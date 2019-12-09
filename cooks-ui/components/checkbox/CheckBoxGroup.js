import React, {
    PureComponent
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import Checkbox from './CheckBox'
import cls from 'classnames'

export default class CheckBoxGroup extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            prefixCls: 'cooks-checkbox-group'
        }
    }

    static defaultProps = {}

    static propTypes = {}

    render(){
        return (<div>循环完了</div>)
    }
}