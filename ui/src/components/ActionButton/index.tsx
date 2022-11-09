import React, { useState } from 'react';
import { Button, Icons } from './../index';

export const ActionButton: React.FC<any> = (props: any) => {
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        setLoading(true);
        const response = await (
            await fetch(
                props.url
            )
        ).json();
        props.onResponse && props.onResponse(response);
        setLoading(false);
    };

    return <Button {...props} icon={<Icons.Play />} loading={loading} onClick={onClick}>
        {props.children}
    </Button>
}

