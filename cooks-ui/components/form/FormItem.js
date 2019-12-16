import React, {
    PureComponent
  } from 'react'
  import './style.less'
  import cls from 'classnames'
  import PropTypes from 'prop-types'
  

  export default class FormItem extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        prefixCls: "cooks-formitem"
      }
    }
  
    static defaultProps = {
    }
  
    static propTypes = {
        label:PropTypes.string
    }

    render(){
        return <form>
            666
            </form>
    }
}