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

storiesOf('input and icon', module)
  .add('input',
    ()=>(
      <div>
        <h2>输入框</h2>
        <Input placeholder='666'/>
        <h2>密码框</h2>
        <Input type='password'/>
        <h2>只读框</h2>
        <Input readonly placeholder='88889' />

      </div>
    )
  ).add('icon',
    ()=>(
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