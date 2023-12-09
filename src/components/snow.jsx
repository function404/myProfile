import React from 'react';
import Snowfall from 'react-snowfall';

export default function Snow() {
    return (
        <div>
            <Snowfall 
                color="white"
                snowflakeCount={150}
                style={{height: '100%', width: '100%',}}
            />
        </div>
    )
};

