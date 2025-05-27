import React from 'react';
import { Button, Card, Typography, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const { Title } = Typography;

const departments = [
  { name: 'Admin', path: '/dashboard' },
  { name: 'Production Manager', path: '/production' },
  { name: 'Purchase Manager', path: '/purchase' },
  { name: 'General Manager', path: '/' },
  { name: 'Store Manager', path: '/store' }, 
  { name: 'Sales Manager', path: '/sales' },
  { name: 'Quality Manager', path: '/quality' },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <Card className="homepage__card" bodyStyle={{ padding: 0 }}>
        <div className="homepage__card-body">
          <Title level={2} className="homepage__title">
            Select Department to Login
          </Title>
          <Row gutter={[20, 20]} justify="center">
            {departments.map(({ name, path }) => (
              <Col xs={24} sm={12} key={name}>
                <Button
                  block
                  size="large"
                  className="homepage__button"
                  onClick={() => navigate(path)}
                >
                  {name}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
