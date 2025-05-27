import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // handle login logic here
    // For demo, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-title">Login</div>
        <Form
          className="auth-form"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input placeholder="Enter your email" autoComplete="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" autoComplete="current-password" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Link to="/signup" className="auth-link">
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
