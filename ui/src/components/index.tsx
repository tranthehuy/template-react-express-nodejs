import React from 'react';
import { PageContainer as aPageContainer } from '@ant-design/pro-components';
import { 
    notification,
    Typography,
    Card as aCard,
    Button as aButton, 
    List as aList,
    Col as aCol, 
    Row as aRow,
} from 'antd';
import { ExperimentOutlined, CaretRightOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text: aText } = Typography;

export const notify = (message: string) => notification.info({ message })

export const H1: React.FC = (props) => (<Title {...props} />)
export const H2: React.FC = (props) => (<Title {...props} level={2}/>)
export const H3: React.FC = (props) => (<Title {...props} level={3}/>)

export const List = aList;
export const ListItem = aList.Item;
export const P = Paragraph;
export const Text = aText;
export const Card = aCard;
export const Button = aButton;
export const Row = aRow;
export const Col = aCol;

export const Icons = {
    ExperimentOutlined,
    Play: CaretRightOutlined
}

export const PageContainer = aPageContainer;