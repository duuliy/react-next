import React, {
    PureComponent
  } from 'react'
  import './style.less'
  import cls from 'classnames'
  import PropTypes from 'prop-types'
  import FormItem from './FormItem'
  import FormContext from './formContext.js'
  import createDOMForm from 'rc-form/lib/createDOMForm'
//   import { createForm, formShape } from 'rc-form'
  
  const FormLayouts = ['horizontal', 'inline', 'vertical']

  class Form extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        prefixCls: "cooks-form"
      }
    }
  
    static defaultProps = {
        layout: 'horizontal',
        onSubmit(e) {
          e.preventDefault();
        }
        // form:formShape 
    }
  
    static propTypes = {
        form:PropTypes.object,
        layout: PropTypes.oneOf(FormLayouts),
        children: PropTypes.any,
        onSubmit: PropTypes.func,
        //以下所有方法全是rc-form提供
        getFieldDecorator: PropTypes.any, //用于和表单进行双向绑定
        getFieldError: PropTypes.func, //获取某个输入控件的 Error
        getFieldsValue: PropTypes.func, //获取一组输入控件的值
        getFieldValue: PropTypes.func, //获取一个输入控件的值
        resetFields: PropTypes.func, //重置
        setFields: PropTypes.func,  //设置一组输入控件的值与错误状态
        setFieldsValue: PropTypes.func, //设置一组输入控件的值
        validateFields: PropTypes.func //校验并获取一组输入域的值与 Error
    }

    static Item = FormItem;

    //依赖注入rc-form到组件的props
    static create = function create(
        options  = {},
      ) {
        return createDOMForm({
          fieldNameProp: 'id',
          ...options,
          fieldMetaProp: 'data-__meta',
          fieldDataProp: 'data-__field',
        });
      };

    _onSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(e)
    }

    render(){
        const {prefixCls}=this.state
        const {
            children,
            className,
            layout,
            ...otherProps
        }=this.props

        const formClassName = cls(
            prefixCls,
            {
              [`${prefixCls}-horizontal`]: layout === 'horizontal',
              [`${prefixCls}-vertical`]: layout === 'vertical',
              [`${prefixCls}-inline`]: layout === 'inline'
            },
            className,
          );
        return(
        <FormContext.Provider value={{ layout }}>
        <form
          prefixCls
          {...otherProps}
          onSubmit={this._onSubmit}
          className={formClassName}
        >
          {children}
        </form>
        </FormContext.Provider>
        )
    }
}
export default Form