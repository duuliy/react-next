// Upload
import React, {
  PureComponent,createRef
} from 'react'
import './style.less'
import PropTypes from 'prop-types'
import cls from 'classnames'


const uploadFileType = "file"
const uploadImageType = "image"


// 上传 对应 进度条属性 的状态
const UPLOAD_STATUS = {
  ERROR: "error",
  SUCCESS: "success",
  PROGRESS: "progress",
  ABORT: "warning",
  TIMEOUT: "warning"
};

// 默认图片上传文件后缀名限制
const imageReg = /\/(?:jpeg|jpg|png|gif|svg)/i;

export default class Upload extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      prefixCls: 'cooks-upload'
    }
    this.fileRef = createRef()
  }

  static defaultProps = {
    // showUploadList: true, //是否显示上传文件列表
    multiple: false, //是否允许多选
    // maxSize: 1024, //上传文件大小限制
    // directory: false, //是否上传文件夹
    // type: uploadFileType, //上传的文件类型 图片 还是 文件
    // name: "file", //后端接收文件字段名
    // onComplete: () => {},
    // onError: () => {},
    // onStart: () => {},
    // onTimeOut: () => {},
    // onProgress: () => {},
    // onPreview: () => {},
    onChange: () => {}
  }

  static propTypes = {
    // showUploadList: PropTypes.bool,
    // directory: PropTypes.bool,
    multiple: PropTypes.bool,
    // accept: PropTypes.string,
    // typeName: PropTypes.any,
    // name: PropTypes.string,
    // type: PropTypes.oneOf([uploadFileType, uploadImageType]),
    // onComplete: PropTypes.func,
    // onError: PropTypes.func,
    // onStart: PropTypes.func,
    // onTimeOut: PropTypes.func,
    // onProgress: PropTypes.func,
    // onPreview: PropTypes.func,
    onChange: PropTypes.func
  }

  _onChange=(e)=>{
    const files = [...this.fileRef.current.files]
      console.log(files)
  }

  render(){
    const { prefixCls } = this.state
    const {
        multiple,
        accept,
        ...attr
    }=this.props
    return(
      <div className={prefixCls} {...attr}>
        <div className={`${prefixCls}-title`}>
          <span>
            上传
          </span>
          <input
            type="file"
            multiple={multiple}
            accept={accept}
            ref={this.fileRef}
            onChange={this._onChange}
          />
        </div>
        <progress id="progress" value="0" max="100"></progress>
        <div className={`${prefixCls}-process`}>
          <ul>
            <li>
                1
            </li>
          </ul>
        </div>
      </div>
    )
  }

  componentDidMount(){

  }

}