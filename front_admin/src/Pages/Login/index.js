import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

import { Button, Checkbox, Form, Avatar, Space, Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Ici, vous devrez appeler votre API de connexion et gérer la réponse
      // Je simule une connexion réussie pour l'exemple
      if (values.email === 'admin@example.com' && values.password === 'password') {
        localStorage.setItem('token', 'fake_token');
        navigate('/');
      } else {
        message.error('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <Form
        className="login-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="login-header">
          <Space align="center">
            <Avatar size={64} icon={<UserOutlined />} className="login-logo" />
            <h2 className="login-title">Login</h2>
          </Space>
        </div>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Veuillez insérer votre email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mot de passe"
          name="password"
          rules={[
            {
              required: true,
              message: 'Veuillez insérer votre mot de passe!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Enregistrer le mot de passe</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="btn1" type="primary" htmlType="submit">
            Se connecter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;