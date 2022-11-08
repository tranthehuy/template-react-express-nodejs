import React from 'react';
import { PageContainer as aPageContainer } from '@ant-design/pro-components';
import { Typography, Card as aCard, Button as aButton } from 'antd';
import { ExperimentOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const H1: React.FC = (props) => (<Title {...props} />)
export const H2: React.FC = (props) => (<Title {...props} level={2}/>)
export const H3: React.FC = (props) => (<Title {...props} level={3}/>)

export const Card = aCard;
export const Button = aButton;

export const Icons = {
    ExperimentOutlined
}

export const PageContainer = aPageContainer;