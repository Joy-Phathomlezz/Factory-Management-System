import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // handle signup logic here
    // For demo, redirect to login
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-title">Sign Up</div>
        <Form
          className="auth-form"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="Enter your name" autoComplete="name" />
          </Form.Item>
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
            <Input.Password placeholder="Create a password" autoComplete="new-password" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Link to="/login" className="auth-link">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
