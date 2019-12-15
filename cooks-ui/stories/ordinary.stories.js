import React from 'react'
import message from '../components/message'
import Button from '../components/button'
import Upload from '../components/upload'
import Select from '../components/select'
import DatePicker from '../components/datepicker'
import Table from '../components/table'
import Pagination from '../components/pagination'
import { storiesOf } from '@storybook/react'

const beforeUpload = () => {
  //这里设置大小和格式的验证
  return true
}
// select
const _onChange = (file, fileList, e) => {
  console.log(file)
  console.log(fileList)
  console.log(e)
}

const onBlur = (e) => {
  console.log('失去焦点', e)
}

const onFocus = (e) => {
  console.log('获得焦点', e)
}
const onSearch = (e) => {
  console.log(e)
}

const onSelect = (e) => {
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
  ).add(
    'Select',
    () => (
      <div>
        <Select style={{ width: 120 }} placeholder='请选择'>
          <Select.Option value="lucy" >lucy</Select.Option>
          <Select.Option value="lucy2">lucy2</Select.Option>
          <Select.Option value="lucy3">lucy3</Select.Option>
        </Select>

        <Select style={{ width: 120 }} placeholder='可搜索' showSearch>
          <Select.Option value="lucy" >lucy</Select.Option>
          <Select.Option value="lucy2">lucy2</Select.Option>
          <Select.Option value="lucy3">lucy3</Select.Option>
        </Select>

        <Select style={{ width: 120 }}
          placeholder='有事件'
          showSearch
          onBlur={onBlur}
          onFocus={onFocus}
          onSearch={onSearch}
          onSelect={onSelect}
        >
          <Select.Option value="lucy" >lucy</Select.Option>
          <Select.Option value="lucy2">lucy2</Select.Option>
          <Select.Option value="lucy3">lucy3</Select.Option>
        </Select>
      </div>
    )
  ).add(
    'DatePicker  日期',
    () => (
      <div>
        <DatePicker />
      </div>
    )
  ).add(
    'table  表格',
    () => (
      <div>
        <Table />
        <Pagination />
      </div>
    )
  )
