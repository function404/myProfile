import React from 'react';
import Snowfall from 'react-snowfall';

export default function Snow() {
    return (
        <div>
            <Snowfall 
                wind={[-0, 0]}
                color="white"
                snowflakeCount={120}
                style={{height: '100%', width: '100%',}}
            />
        </div>
    )
};

