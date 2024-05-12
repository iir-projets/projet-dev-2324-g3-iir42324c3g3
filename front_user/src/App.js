import React, { useState ,useEffect} from 'react';
import { Select,Breadcrumb, Layout, Menu, theme, Card, Space, TreeSelect, DatePicker, Button, Typography, Row, Col, Input, Checkbox, Image, Form,message } from 'antd';
import './App.css';
import img1 from './img1.png';
import axios from 'axios';

const { RangePicker } = DatePicker;
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;



const items = [
  { key: 1, label: 'Mes Réservations' },
  { key: 2, label: "S'inscrire" },
  { key: 3, label: 'Se Connecter' },
];

const App = () => {
  const [departureValue, setDepartureValue] = useState(); 
  const [destinationValue, setDestinationValue] = useState();
  const [showVolCard, setShowVolCard] = useState(false); // State to control the visibility of the Vol card
  const [showReservationForm, setShowReservationForm] = useState(false); // State to control the visibility of the reservation form
  const [filteredVolData, setFilteredVolData] = useState([]);
  const [aeroportData, setAeroportData] = useState([]);
  const [volData, setVolData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/aeroport');
        const formattedData = response.data.map((aeroport) => ({
          label: aeroport.ville,
          value: aeroport.num,
        }));
        setAeroportData(formattedData);
      } catch (error) {
        console.error('Error fetching aeroport data:', error);
      }
    };
  
    fetchData();
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/vols');
        const formattedData = response.data.map((vol) => ({
          id:vol.num,
          date_depart: vol.date_depart,
    date_arrive: vol.date_arrive,
    id_aeroport_depart: vol.id_aeroport_depart,
    id_aeroport_arrive: vol.id_aeroport_arrive,
        }));
        setVolData(formattedData);
        console.log(formattedData);
      } catch (error) {
        console.error('Error fetching vol data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleDepartChange = (newValue) => {
    console.log(newValue);
    setDepartureValue(newValue);
  };

  
  const handleArriveChange = (newValue) => {
    console.log(newValue);
    setDestinationValue(newValue);
  };
  
  const handleSearch = () => {
    if (departureValue && destinationValue) {
      const filteredData = volData.filter(
        (vol) =>
          vol.id_aeroport_depart === departureValue &&
          vol.id_aeroport_arrive === destinationValue
      );
      setFilteredVolData(filteredData);
      setShowVolCard(true);
    } else {
      console.log('Please select both departure and destination cities');
    }
  };

  const handleReserver = () => {
    setShowVolCard(false); // Hide the Vol card
    setShowReservationForm(true); // Show the reservation form
  };

  const handleEnregister = (values) => {
    console.log('Form submitted:', values);
  
    message.success('Votre réservation a été enregistrée');
  
    setTimeout(() => {
      window.location.reload();
    }, 2000); 
  };

  const initialValue = 'Valeur par défaut';

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh', backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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
            background: 'transparent',
            borderRadius: borderRadiusLG,
          }}
        >
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card
              style={{
                border: '1px solid',
                borderColor: '#000000',
                background: 'white',
              }}
              title={<Title level={2}>Planifier votre Voyage</Title>}
              size="large"
            >
              <Select
                    placeholder="Ville de depart"
    style={{
      width: 200,
    }}
    onChange={handleDepartChange}
    options={aeroportData}
    />
              <Title level={5}>Ville D'arrivée</Title>
              <Select
              placeholder="Ville de d'arrive"
    style={{
      width: 200,
    }}
    onChange={handleArriveChange}
    options={aeroportData}

  />
              <Button type="primary" onClick={handleSearch} style={{ width: '20%', marginLeft: '16px' }}>
                Rechercher
              </Button>
              <div style={{ marginTop: '16px' }}>
                <Checkbox>aller retour</Checkbox>
              </div>
              <p>
                <RangePicker showTime />
              </p>
            </Card>
            
            {showVolCard && filteredVolData.length > 0 ? (
  filteredVolData.map((vol) => (
    <Card
      key={vol.id}
      style={{
        border: '2px solid',
        borderColor: '#000000',
        background: 'white',
      }}
      title={<Title level={2}>Vol</Title>}
      size="large"
    >
      <Row>
        <Col span={6}>
          <Title level={2}>Date de départ :</Title>
          <Title level={4}>{vol.date_depart}</Title>
        </Col>
        <Col span={6}>
          <Title level={2}>Date d'arrivée :</Title>
          <Title level={4}>{vol.date_arrive}</Title>
        </Col>
        <Col span={6}>
          <Title level={2}>Aéroport de Départ :</Title>
          <Title level={4}>
            {
              aeroportData.find(
                (aeroport) => aeroport.value === vol.id_aeroport_depart
              )?.label
            }
          </Title>
        </Col>
        <Col span={6}>
          <Button type="primary" style={{ marginLeft: '16px' }} onClick={handleReserver}>
            Réserver
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Title level={2}>Aéroport d'arrivée :</Title>
          <Title level={4}>
            {
              aeroportData.find(
                (aeroport) => aeroport.value === vol.id_aeroport_arrive
              )?.label
            }
          </Title>
        </Col>
        <Col span={6}>
          <Title level={2}>Prix :</Title>
          <Title level={4}>399DH</Title>
        </Col>
      </Row>
    </Card>
  ))
) : showVolCard ? (
  <Card
    style={{
      border: '2px solid',
      borderColor: '#000000',
      background: 'white',
    }}
    title={<Title level={2}>Aucun vol disponible</Title>}
    size="large"
  >
    <Text>Désolé, aucun vol n'est disponible pour les aéroports sélectionnés.</Text>
  </Card>
) : null}


            {showReservationForm && (
              <Card
                style={{
                  border: '2px solid',
                  borderColor: '#000000',
                  background: 'white',
                }}
                title={<Title level={2}>Formulaire de Réservation</Title>}
                size="large"
              >
                <Form onFinish={handleEnregister}>
                  <Form.Item name="cin" label="CIN">
                    <Input />
                  </Form.Item>
                  <Form.Item name="nom" label="Nom">
                    <Input />
                  </Form.Item>
                  <Form.Item name="prenom" label="Prénom">
                    <Input />
                  </Form.Item>
                  <Form.Item name="email" label="Email">
                    <Input />
                  </Form.Item>
                  <Form.Item name="telephone" label="Téléphone">
                    <Input />
                  </Form.Item>
                  <Form.Item name="adresse" label="Adresse">
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Enregistrer
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            )}
          </Space>
        </div>
      </Content>
      <Footer className="footer">Projet ©{new Date().getFullYear()}</Footer>
    </Layout>
  );
};

export default App;