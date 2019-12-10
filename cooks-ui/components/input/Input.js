import React, {
    PureComponent
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import cls from 'classnames'

export default class Input extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            prefixCls: "cooks-input"
        }
        this.input=''
    }

    static defaultProps = {
        disabled: false,
        readonly: false,
        placeholder: "",
        type: "text",
        onChange: () => {},
        onClear: () => {},
        allowClear: false,
        suffix: null,
        prefix: null
    }

    static propTypes = {
        id: PropTypes.string,
        maxLength: PropTypes.number,
        placeholder: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.string,
            PropTypes.object
        ]),
        addonClassName: PropTypes.string,
        wrapperClassName: PropTypes.string,
        disabled: PropTypes.bool,
        readonly: PropTypes.bool,
        type: PropTypes.oneOf([
            "text",
            "password",
            "range",
            "date",
            "number",
            "color",
            "email"
        ]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.string,
        onChange: PropTypes.func,
        onClear: PropTypes.func,
        allowClear: PropTypes.bool,
        suffix: PropTypes.any,
        prefix: PropTypes.any
    }

    focus() {
        this.input.focus();
    }

    blur() {
        this.input.blur();
    }

    select() {
        this.input.select();
    }

    saveClearableInput = (input) => {
        this.clearableInput = input;
    };

    saveInput = (input) => {
        this.input = input;
    };

    render() {
        const {
            placeholder,
            maxLength,
            readonly,
            type
        }=this.props
        return ( 
        <input
            className={this.state.prefixCls}
            placeholder={placeholder}
            maxLength={maxLength}
            readOnly={readonly}
            type={type}
            value={value}
            onChange={this._onChange}
            ref = {this.saveInput}
            />
        )
    }
}