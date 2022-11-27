import React, { useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
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

    if (props.needConfirm) {
        return <Popconfirm 
            title="Are you sure？" 
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={onClick}
        >
            <Button icon={<Icons.Play />} loading={loading} {...props} >
                {props.children}
            </Button>
        </Popconfirm>
    }

    return <Button icon={<Icons.Play />} loading={loading} onClick={onClick} {...props} >
        {props.children}
    </Button>
}

