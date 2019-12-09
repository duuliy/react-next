import React from 'react'
import Checkbox from '../components/checkbox'
import { storiesOf } from '@storybook/react'

const aa = (e)=>{
  console.log(e)
}
storiesOf('Checkbox', module)
  .add('Checkbox',
    ()=>(
      <div>
        <h2>基本使用</h2>
        <Checkbox>
            复选框
        </Checkbox>
        <Checkbox onChange={aa}>
            复选框2
        </Checkbox>

        <Checkbox disabled checked>
            复选框
        </Checkbox>

        <Checkbox disabled>
            复选框
        </Checkbox>
      </div>
    )
  )