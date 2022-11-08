import { PageContainer, Button, Card, H3, Icons } from '@/components';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer className='devtoolsPage'>
      <Card>
        <H3>Shortcuts</H3>
        <a target="_blank" href="https://ant.design/components/overview/">
          <Button icon={<Icons.ExperimentOutlined />} >Ant Components</Button>
        </a> 
      </Card>
      <Card>
        <H3>Machine Status</H3>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
