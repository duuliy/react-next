import React from 'react'
import Button from '../components/button'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import './styles/button.less'

// export default { title: 'Button' }

// export const withText = () => <Button>Hello Button</Button>

// export const withEmoji = () => (
//   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
// )

storiesOf('常用', module)
  .add(
    'Button',
    () =>(
      <div className="button-example">
        <h2>基本使用</h2>
        <Button onClick={action('clicked')} className={'cc'} type={'cc'}>Hello Button</Button>

        <Button>😀 😎 👍 💯</Button>

        <h2>三种大小</h2>

        <Button size="large">
        large
        </Button>

        <Button>
        default
        </Button>

        <Button size="small">
        small
        </Button>

        <h2>七种样式</h2>

        <Button type="primary">
        primary
        </Button>

        <Button type="default">
        default
        </Button>

        <Button type="warning">
        warning
        </Button>

        <Button type="success">
        success
        </Button>

        <Button type="danger">
        danger
        </Button>

        <Button type="info">
        info
        </Button>

        <Button type="error" onClick={()=>console.log(666)}>
        error
        </Button>

        <h2>禁止</h2>

        <Button disabled onClick={()=>console.log(666)}>
        禁止
        </Button>
      </div>
    )
  )
