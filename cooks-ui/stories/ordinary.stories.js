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

const columns = [{
  title: 'Name', dataIndex: 'name', key: 'name', width: 100
}, {
  title: 'Age', dataIndex: 'age', key: 'age', width: 100
}, {
  title: 'Address', dataIndex: 'address', key: 'address', width: 200
}, {
  title: 'Operations', dataIndex: '', key: 'operations', render: () => <a href="#">Delete</a>
}]

let data = []

for (let i = 0; i < 200; i++) {
  let data2 = { name: 'Jack', age: i, address: 'some where', key: i }
  data.push(data2)
}

let current = 1
let pageSize = 20

const tableOnChange = (current, pageSize) => {
  current = current
  pageSize = pageSize
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
        <h2>普通</h2>
        <Table
          columns={columns}
          data={data}
          current={current}
          total={200}
          onChang={tableOnChange}
        />
        <h2>滚动</h2>
        <Table
          columns={columns}
          data={data}
          current={current}
          total={200}
          onChang={tableOnChange}
          scroll={{ y: 200 }}
        />
      </div>
    )
  )
