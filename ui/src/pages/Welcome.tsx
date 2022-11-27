import { PageContainer, Button, Card, H3, Icons, List, ListItem, Row, Col, notify } from '@/components';
import { Fetch } from '@/components/Fetch';
import { RefreshSection } from '@/components/RefreshSection';
import { ActionButton } from '@/components/ActionButton';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer className='devtoolsPage'>
      <Row gutter={[4, 4]}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card>
            <H3>Quick scripts</H3>
            <div className='text-align-right'>
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
                              icon={<Icons.View />}
                              type="link"
                              url={`/api/scripts/read?name=${item}`}
                              onResponse={(res: any) => notify(res?.result)}
                            ></ActionButton>
                          ]}
                        >
                          <ActionButton
                            needConfirm
                            type="link"
                            url={`/api/scripts/run?name=${item}`}
                            onResponse={(res: any) => notify(res?.result)}
                          >{item}</ActionButton>
                        </ListItem>
                      )}
                    />
                  }
                >
                  Loading...
                </Fetch>
              </RefreshSection>
            </div>

          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card>
            <H3>Shortcuts</H3>
            <a target="_blank" href="https://ant.design/components/overview/">
              <Button icon={<Icons.ExperimentOutlined />} >Ant Components</Button>
            </a>
          </Card>
        </Col>
      </Row>

    </PageContainer>
  );
};

export default Welcome;
