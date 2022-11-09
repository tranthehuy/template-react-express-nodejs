import React, { Fragment, useState } from 'react';
import { Button, Icons } from './../index';

export const RefreshSection: React.FC<any> = (props: {
    children: any,
    label?: string
}) => {
    const [data, setData] = useState(0);
    return <Fragment key={data}>
        <Button
            icon={<Icons.Refresh />}
            onClick={() => setData(0 - (new Date()).getTime())}
        >
            {props.label}
        </Button>
        {props.children}
    </Fragment>
}

