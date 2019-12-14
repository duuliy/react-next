import React from 'react'
import Row from '../components/row'
import Col from '../components/col'
import { storiesOf } from '@storybook/react'
import './styles/grid.less'

storiesOf('布局', module)
  .add('grid',
    () => (
      <div >
        <h2>栅格</h2>
        {[12, 8, 6].map((span, i) => {
          return (
            <Row className="example-row" key={i}>
              {new Array(24 / span).fill(void (0)).map((_, j) => (
                <Col className="example-col" span={span} key={j}>
                  <span>{span}</span>
                </Col>
              ))}
            </Row>
          )
        })}

        <h2>间隔</h2>
        <Row className="example-row" gutter={24}>
          <Col className="example-col" span={12}>
            <span>666</span>
          </Col>
          <Col className="example-col" span={6} offset={6}>
            <span>666</span>
          </Col>
        </Row>

        <h2>flex</h2>
        <Row type={'flex'} justify align>
          <Col className="example-col" span={12}>
            <span>666</span>
          </Col>
          <Col className="example-col" span={12}>
            <span>666</span>
          </Col>
        </Row>
      </div>
    )
  )