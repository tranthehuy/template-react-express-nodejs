import { PageContainer, Button, Card, H3, Icons, List, ListItem, Text, Row, Col } from '@/components';
import { Fetch } from '@/components/Fetch';
import { RefreshSection } from '@/components/RefreshSection';
import { ActionButton } from '@/components/ActionButton';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer className='devtoolsPage'>
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
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
                      <ListItem
                        actions={[
                          <ActionButton 
                            url={`/api/scripts/run?name=${item}`}
                            onResponse={(res: any) => console.log(res)}
                          >Run</ActionButton>
                        ]}
                      ><Text>{item}</Text></ListItem>
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
        </Col>
      </Row>

    </PageContainer>
  );
};

export default Welcome;
