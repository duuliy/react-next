import React from 'react'
import Input from '../components/input/index.js'
import { storiesOf } from '@storybook/react'

storiesOf('input', module)
  .add('input',
    ()=>(
      <div>
        <h2>基本使用</h2>
        <Input indeterminate>
            输入框
        </Input>

      </div>
    )
  )