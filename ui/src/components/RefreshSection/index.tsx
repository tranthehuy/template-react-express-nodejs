import React, { Fragment, useState } from 'react';
import { Button } from './../index';

export const RefreshSection: React.FC<any> = (props: {
    children: any
}) => {
    const [data, setData] = useState(0);
    return <Fragment key={data}>
        {props.children}
        <Button onClick={() => setData(0 - (new Date()).getTime())}>Refresh</Button>
    </Fragment>
}

