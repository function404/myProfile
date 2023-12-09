'use client';

import React from 'react';
import Snowfall from 'react-snowfall';

const Snow = () => {
    return (
      <div>
        <Snowfall
          wind={[-0, 1]}
          snowflakeCount={150}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </div>
    );
  };
  
  export default Snow;
