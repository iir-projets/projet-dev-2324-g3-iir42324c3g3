
import React, { useState, useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, DashboardOutlined,PushpinOutlined,SolutionOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, theme, Typography, Row, Col, Space, Dropdown ,Title} from 'antd';
import AppRoutes from '../AppRoutes';
import './style.css';

const { Header, Sider, Content, Footer } = Layout;

const AppComponents = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);


  const handleLogout = () => {
    navigate('/login');
  };

  const items = [
    {
      label: 'Profile',
      key: '1',
    },
    {
      label: 'Déconnexion',
      key: '2',
      onClick: handleLogout,
      danger: true,
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
      style={{backgroundColor:"#023047"}}
      >
        {/* Placeholder for logo */}
        <div className="logo" > 
          <span style={{ fontSize: '20px', color: 'white' ,}}>Admin Panel</span>
        </div>
        <Menu
         style={{backgroundColor:"#023047"}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(item) => {
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              key: '/',
              icon: <DashboardOutlined />,
              label: 'DashBoard',
            },
            {
              key: '/vol',
              icon: <PushpinOutlined />,
              label: 'Gestion Vol',
            },
            {
              key: '/reservation',
              icon: <SolutionOutlined />,
              label: 'Gestion Reservation',
            },
            {
                key: '/avion',
                icon: <SolutionOutlined />,
                label: 'Gestion Avion',
              },
              {
                key: '/aeroport',
                icon: <SolutionOutlined />,
                label: 'Gestion Aeroport',
              },
              {
                key: '/cooraeroport',
                icon: <SolutionOutlined />,
                label: 'Gestion Coordonnées',
              },
              {
                key: '/passager',
                icon: <SolutionOutlined />,
                label: 'Gestion Passager',
              },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Row>
            <Col
              xs={{
                span: 9,
                offset: 14,
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-50px" }}>
                <Space wrap>
                  <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
                    Admin
                  </Dropdown.Button>
                </Space>
              </div>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <AppRoutes />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            margin: 10,
            padding: 10,
          }}
        >
          <Typography.Title level={5}>Projet Pfa EMSI ©2024 Created by </Typography.Title>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppComponents;
