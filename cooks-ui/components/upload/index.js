// Upload
import React, {
  PureComponent, createRef
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import cls from 'classnames'
import { cloneDeep } from 'lodash'
import message from '../message'
import axios from 'axios'


const uploadFileType = "file"
const uploadImageType = "image"

// 默认图片上传文件后缀名限制
const imageReg = /\/(?:jpeg|jpg|png|gif|svg)/i;

export default class Upload extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: 'cooks-upload',
      uploadList: []
    }
    this.fileRef = createRef()
  }

  static defaultProps = {
    headers: {},
    showUploadList: true, //是否显示上传文件列表
    multiple: false, //是否允许多选
    method: 'post',
    name: "file", //后端接收文件字段名
    beforeUpload: () => true,
    onChange: () => { }
  }

  static propTypes = {
    method: PropTypes.oneOf(['get', 'post', 'put', 'deleted', 'patch']),
    headers: PropTypes.object,
    action: PropTypes.string,  //上传地址
    data: PropTypes.object,
    showUploadList: PropTypes.bool,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    name: PropTypes.string,
    beforeUpload: PropTypes.func,
    onChange: PropTypes.func
  }

  getCover(file) {
    return window.URL.createObjectURL(file);
  }

  onUploadFile = (file, index) => {
    const { name, action, data, method, headers } = this.props;
    const formData = new FormData();
    const xhr = new XMLHttpRequest();

    formData.append(name, file);
    axios[method](action, data, headers).then(res => {
      if (res.head.status === 200) {
        message.success('成功')
      } else {
        message.error('error')
      }
    }).catch(res => {
      message.error('error')
    })

  }

  _onChange = (e) => {
    const files = [...this.fileRef.current.files]
    files.forEach((file, index) => {
      const cover = this.getCover(file)
      const fileInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        cover
      }
      if (!this.props.beforeUpload(fileInfo)) return

      this.setState({
        uploadList: [...cloneDeep(this.state.uploadList), fileInfo]
      },
        () => {
          this.props.onChange(fileInfo, this.state.uploadList, e)
          this.onUploadFile(fileInfo, index)
        }
      )
    })

  }

  render() {
    const { prefixCls, uploadList } = this.state
    const {
      multiple,
      accept,
      showUploadList,
      beforeUpload,
      children,
      ...attr
    } = this.props

    return (
      <div className={prefixCls} {...attr}>
        <div className={`${prefixCls}-title`}>
          <span>
            {children}
          </span>
          <input
            type="file"
            multiple={multiple}
            accept={accept}
            ref={this.fileRef}
            onChange={this._onChange}
          />
        </div>
        {showUploadList &&
          <div className={`${prefixCls}-process`}>
            <ul>
              {uploadList.map((item, i) => (
                <li key='i'>
                  {item.name}
                  <progress id="progress" value={item.progress} max="100"></progress>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    )
  }

  componentDidMount() {

  }

}