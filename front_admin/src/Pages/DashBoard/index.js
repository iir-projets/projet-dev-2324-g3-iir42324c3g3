import React,{ useState, useEffect } from 'react';
import { Col, Row, Statistic, Card, Calendar, theme } from 'antd';
import axios from 'axios';


const DashBoard = () => {
const [aeroportCount, setAeroportCount] = useState(0);
const [avionCount, setAvionCount] = useState(0);
const [passagerCount , setPassagerCount] = useState(0);
const [reservationCount , setReservaionCount] = useState(0);
const [volCount, setVolCount] = useState(0);

useEffect(() => {
  const fetchData = async () => {
    try {
      const [aeroportResponse, avionResponse, passagerResponse,reservationResponse,volResponse] = await Promise.all([

        axios.get('http://localhost:8080/api/aeroport'),
        axios.get('http://localhost:8080/api/avion'),
        axios.get('http://localhost:8080/api/Passager'),
        axios.get('http://localhost:8080/api/reservation'),
        axios.get('http://localhost:8080/api/vols'),

      ]);

      setAeroportCount(aeroportResponse.data.length);
      setAvionCount(avionResponse.data.length);
      setPassagerCount(passagerResponse.data.length);
      setReservaionCount(reservationResponse.data.length);
      setVolCount(volResponse.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.response) {
        
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  fetchData();
}, []);


  const { token } = theme.useToken();
  const wrapperStyle = {
    width: '100%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre d'Aéroports" value={aeroportCount} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre d'Avions" value={avionCount}  />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre de Coordonnées d'Aéroport" value={112} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre de Passagers" value={passagerCount}  />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre de Réservations" value={reservationCount}  />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre de Vols" value={volCount} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;