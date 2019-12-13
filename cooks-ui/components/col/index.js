import React, {
    PureComponent
  } from 'react'
  import './style.less'
  import PropTypes from 'prop-types'
  import RowContext from '../row/RowContext.js'
  import cls from 'classnames'
  
  export default class Col extends PureComponent {
      constructor(props) {
        super(props)
        this.state = {
          prefixCls: "cooks-row"
        }
      }
    
      static defaultProps = {

  
      }
    
      static propTypes = {

      }
  
      render(){

          return(
            <RowContext.Consumer>
                {({ gutter }) => {
                console.log(gutter)
                    return(<div>
                        666
                    </div>)
                }}
            </RowContext.Consumer>
          )
      }
  }
  