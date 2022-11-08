import React, { useEffect, useState } from 'react';

export const Fetch: React.FC<any> = (props: {
    url: string,
    render: Function,
    children: any
}) => {
    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    props.url
                )
            ).json();
            setData(data);
        };

        dataFetch();
    }, []);

    return data ? props.render(data) : props.children || ''
}

