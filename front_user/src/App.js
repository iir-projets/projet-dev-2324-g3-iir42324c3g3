import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Card, Space, TreeSelect, DatePicker, Button, Typography, Row, Col } from 'antd';
import './App.css';

const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const treeData = [
  {
    title: 'Maroc',
    value: '0-0',
    children: [
      {
        title: 'Marrakech',
        value: '0-0-1',
      },
      {
        title: 'Casa',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'France',
    value: '0-0',
    children: [
      {
        title: 'Paris',
        value: '0-0-1',
      },
      {
        title: 'Marseille',
        value: '0-0-2',
      },
    ],
  },
];

const items = [
  { key: 1, label: 'Mes Réservations' },
  { key: 2, label: "S'inscrire" },
  { key: 3, label: 'Se Connecter' },
];

const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleSearch = () => {
    // Ajoutez ici la logique de recherche
    console.log('Recherche effectuée');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo">Moroccan Airline</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          className="menu"
        />
      </Header>
      <Content className="content">
        <div
          className="content-container"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card
              style={{
                border: '1px solid',
                borderColor: '#000000',
                backgroundColor: '#1890ff',
              }}
              title="J'achète mon billet"
              size="large"
            >
              <TreeSelect
                style={{ width: '35%', marginRight: '10px' }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Ville de Depart"
                treeDefaultExpandAll
                onChange={onChange}
              />
              <TreeSelect
                style={{ width: '35%', marginLeft: '10px' }}
                value={value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Ville de D'arrivée"
                treeDefaultExpandAll
                onChange={onChange}
              />
              <Button type="primary" onClick={handleSearch} style={{ width: '20%', marginLeft: '16px' }}>
                Rechercher
              </Button>
              <p>
                <RangePicker showTime />
              </p>
            </Card>
            <Card  
             style={{
                border: '2px solid',
                borderColor: '#000000',
                backgroundColor:'white',
               
              }}
              title="Vol"
              size="large"
              >
         
           
              <Row>
                <Col span={6}>
                <Title level={4}>Date de départ :</Title> 
                </Col>

                <Col span={6}>
                <Title level={4}>Date d'arrivée :</Title>
                </Col>
                 
                <Col span={6}>
                <Title level={4}>Aéroport de Départ :</Title>
                </Col>
                  
                <Col span={6}>
                <Title level={4}>Aéroport de retour :</Title>
                   </Col>
              </Row>
              <Row>
                <Col span={6}>
                <Title level={4}>Prix</Title>
                  
                </Col>
              </Row>
             
            </Card>
          </Space>
        </div>
      </Content>
      <Footer className="footer">Projet ©{new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default App;