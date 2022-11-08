import { PageContainer, Button, Card, H3, Icons, List,ListItem, Text } from '@/components';
import { Fetch } from '@/components/Fetch';
import { RefreshSection } from '@/components/RefreshSection';
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
        <H3>Quick scripts</H3>
        <RefreshSection>
          <br />
          <Fetch 
            url="/api/scripts?name=ls"
            render={(data: any) => 
              <List
                dataSource={data.scripts}
                renderItem={item => (
                  <ListItem><Text>{item}</Text></ListItem>
                )}
              />
            }
          >
            Loading...
          </Fetch>
        </RefreshSection>
      </Card>
      <Card>
        <H3>Machine Status</H3>
        
      </Card>
    </PageContainer>
  );
};

export default Welcome;
