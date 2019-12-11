import React from 'react'
import message from '../components/message'
import Button from '../components/button'
import Upload from '../components/upload'
import { storiesOf } from '@storybook/react'

const beforeUpload = () => {
  //这里设置大小和格式的验证
  return true
}

const _onChange = (file, fileList, e) => {
  console.log(file)
  console.log(fileList)
  console.log(e)
}
storiesOf('通用', module)
  .add(
    'Message',
    () => (
      <div>
        <Button onClick={() => message.success('成功')}>
          成功
        </Button>

        <Button onClick={() => message.info('info')}>
          info
        </Button>

        <Button onClick={() => message.error('error')}>
          error
        </Button>

        <Button onClick={() => message.warning('warning')}>
          warning
        </Button>

      </div>
    )
  ).add(
    'Upload',
    () => (
      <div>
        <Upload showUploadList={false}>
          无列表
        </Upload>

        <Upload multiple>
          多选上传
        </Upload>

        <Upload
          beforeUpload={beforeUpload}
          onChange={_onChange}
          method='post'
        >
          事件
        </Upload>

        <Upload accept='image/*'>
          只能图片
        </Upload>
      </div >
    )
  )
