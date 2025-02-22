import React, { FC, lazy, Suspense } from 'react';

// @ts-ignore
const Header: FC<any> = lazy(() => import('fe1/Header'));

const Header2 = ({ title = 'duuliy2'}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      这是remote2 header
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header title={title} />
      </Suspense>
    </div>
  )
}

export default Header2;
