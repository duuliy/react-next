import React from 'react'
import Input from '../components/input/index.js'
import {
  InfoIcon,
  LoadingIcon,
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  CloseIcon,
  UpIcon,
  DownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  FileUploadIcon,
  CalendarIcon,
  CloseCircleIcon,
  EmptyIcon,
  UserIcon,
  PasswordShowIcon,
  PasswordHideIcon
} from '../components/icon'
import { storiesOf } from '@storybook/react'

const inputOnChange = (e) => {
  console.log(e.target.value)
}

storiesOf('input and icon', module)
  .add('input',
    () => (
      <div>
        <Input onChange={inputOnChange} placeholder="事件框" style={{ width: 500 }} />
        <Input type='password' placeholder="请输入密码" style={{ width: 500 }} />
        <Input readonly defaultValue={'只读框'} style={{ width: 500 }} />
        <Input disabled placeholder="禁用" style={{ width: 500 }} />
      </div>
    )
  ).add('icon',
    () => (
      <div>
        <InfoIcon />
        <LoadingIcon />
        <SuccessIcon />
        <ErrorIcon />
        <WarningIcon />
        <CloseIcon />
        <UpIcon />
        <DownIcon />
        <ArrowRightIcon />
        <ArrowLeftIcon />
        <FileUploadIcon />
        <CalendarIcon />
        <CloseCircleIcon />
        <EmptyIcon />
        <UserIcon />
        <PasswordShowIcon />
        <PasswordHideIcon />
      </div>
    ))