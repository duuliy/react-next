import React, { FC, lazy, Suspense } from 'react';

// @ts-ignore
const Header: FC<any> = lazy(() => import('fe2/Header2'));

const Header3 = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header title={'duuliy3'} />
      </Suspense>
    </div>
  )
}

export default Header3;
