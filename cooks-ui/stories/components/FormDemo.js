import React, {
    PureComponent
  } from 'react'
import Form from '../../components/form'
import Input from '../../components/input'
import Button from '../../components/button'

const {Item}=Form
@Form.create()
class FormDemo extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
      }
    
      static defaultProps = {
      }
    
      static propTypes = {}

      fffonSubmit = (e)=>{
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values)
          }
        })
      }

      fffonSubmit2 = (e)=>{
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values)
          }
        })
      }

      render(){
        const {
          form:{
            getFieldDecorator
          }
        }=this.props
        return (
          <Form onSubmit={this.fffonSubmit}>
            <Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                type="password"
                placeholder="Password"
                />
            )}
            </Item>
            <Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input placeholder="name"/>
            )}
            </Item>
            <Button htmlType="submit" >提交</Button>
            <Button onClick={this.fffonSubmit}>非onSubmit提交</Button>
          </Form>
          )
      }
}

export default FormDemo