'use client';

import React from 'react';
import Snowfall from 'react-snowfall';

export default function Snow() {
    return (
        <div>
            <Snowfall 
                color="white"
                wind={[-0, 0]}
                snowflakeCount={120}
                style={{height: '100%', width: '100%',}}
            />
        </div>
    )
};
