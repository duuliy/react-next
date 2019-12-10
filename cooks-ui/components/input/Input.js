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
      prefixCls: "cooks-input",
      value: this.props.defaultValue || this.props.value || ""
    }
    this.input = ''
  }

  static defaultProps = {
    disabled: false,
    readonly: false,
    placeholder: "",
    type: "text",
    onChange: () => { },
    onClear: () => { },
    suffix: null
  }

  static propTypes = {
    id: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
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
    suffix: PropTypes.any
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
  }

  _onChange = e => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  onClearValue = () => {
    this.setState({ value: "" });
    if (this.props.onClear) {
      this.props.onClear();
    }
  };

  render() {
    const {
      value,
      prefixCls
    } = this.state
    const {
      placeholder,
      maxLength,
      readonly,
      type,
      defaultValue,
      className,
      disabled,
      onClear,
      ...attr
    } = this.props
    return (
      <input
        {...attr}
        className={cls(prefixCls, className, {
          [`${prefixCls}-disabled`]: disabled
        })}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readonly}
        type={type}
        value={value}
        onChange={this._onChange}
        onClear={this.onClearValue}
        ref={this.saveInput}
      />
    )
  }

  static getDerivedStateFromProps(nextProps) {
    if (Reflect.has(nextProps, "value")) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }
}