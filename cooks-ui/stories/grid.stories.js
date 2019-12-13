import React from 'react'
import Row from '../components/row'
import Col from '../components/col'
import { storiesOf } from '@storybook/react'
storiesOf('布局', module)
  .add( 'grid',
    () =>(
      <div >
        <Row>
          <Col/>
        </Row>
      </div>
    )
  )