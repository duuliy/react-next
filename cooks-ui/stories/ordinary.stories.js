import React from 'react'
import message from '../components/message'
import Button from '../components/button'
import { storiesOf } from '@storybook/react'
// import './styles/button.less'

storiesOf('通用', module)
  .add(
    'Message',
    () =>(
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
  )