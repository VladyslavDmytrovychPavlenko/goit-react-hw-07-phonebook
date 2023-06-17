import React from 'react';
import { MoonLoader } from 'react-spinners';

const CustomLoader = () => {
  return (
    <MoonLoader
      color="#e15b64"
      size={80}
      css={{
        display: 'block',
        margin: '0 auto',
      }}
      loading={true}
      aria-label="CustomLoader-loading"
    />
  );
};

export default CustomLoader;
