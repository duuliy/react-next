import React, {
  PureComponent
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import RowContext from './RowContext.js'


export default class Row extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        prefixCls: "cooks-row"
      }
    }
  
    static defaultProps = {
        gutter:0,
        align:'top',
        justify:'start'

    }
  
    static propTypes = {
        align:PropTypes.string,
        gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),  //xs sm md 响应式
        justify:PropTypes.string,
        type:PropTypes.string  //可选flex
    }

    render(){
        const {
            gutter,
            children
        }=this.props
        return(
            <RowContext.Provider value={{ gutter }}>
               <div>
                  {children}
              </div>
            </RowContext.Provider>
        )
    }
}
