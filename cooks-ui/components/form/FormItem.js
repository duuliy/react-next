import React, {
  PureComponent
} from 'react'
import './style.less'
import Col from '../col/index'
import Row from '../row/index'
import PropTypes from 'prop-types'
import FormContext from './formContext.js'


export default class FormItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: "cooks-formitem"
    }
  }

  static defaultProps = {}

  static propTypes = {
    label: PropTypes.string
  }

  renderItem=(children)=>{
    //双重高阶 不能直接render
    return(
      <FormContext.Consumer > 
      {({layout }) => {
          if(layout==='horizontal'){
            return ( <Row >
              <Col > 
              {children} 
              </Col> 
              </Row>
            )
          }else if(layout==='inline'){
            //内嵌样式省略
          }
        }}
         </FormContext.Consumer> 
    )
  }

  render() {
    const {
      children
    } = this.props
    return  this.renderItem(children)

  }
}