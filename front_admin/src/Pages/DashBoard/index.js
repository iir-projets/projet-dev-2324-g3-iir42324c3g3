import React from 'react';
import { Col, Row, Statistic, Card, Calendar, theme } from 'antd';

const DashBoard = () => {
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
            <Statistic title="Nombre d'Aéroports" value={112} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre d'Avions" value={112.89} precision={2} />
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
            <Statistic title="Nombre de Passagers" value={112.89} precision={2} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre de Réservations" value={112.89} precision={2} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Nombre de Vols" value={112.89} precision={2} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;