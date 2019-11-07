import React from 'react';
// import { Button } from '@storybook/react/demo';
import Button from '../components/button';
import '../components/button/style.less';
import { storiesOf } from '@storybook/react';

export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);

// storiesOf('布局', module)
//   .add(
//     'Grid 栅栏',
//     () => <Button>Hello Button</Button>)
  