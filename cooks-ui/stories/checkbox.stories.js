import React from 'react'
import Checkbox from '../components/checkbox/index.js'
import { storiesOf } from '@storybook/react'

const aa = (e)=>{
  console.log(e)
}

const CheckboxGroup = Checkbox.Group
storiesOf('Checkbox', module)
  .add('Checkbox',
    ()=>(
      <div>
        <h2>基本使用</h2>
        <Checkbox indeterminate>
            复选框
        </Checkbox>

        <Checkbox indeterminate disabled>
            复选框
        </Checkbox>

        <Checkbox onChange={aa}>
            复选框2
        </Checkbox>

        <Checkbox checked>
            复选框
        </Checkbox>

        <Checkbox disabled checked>
            复选框
        </Checkbox>

        <Checkbox disabled>
            复选框
        </Checkbox>

        <h2>组</h2>

        <CheckboxGroup>999</CheckboxGroup>
      </div>
    )
  )