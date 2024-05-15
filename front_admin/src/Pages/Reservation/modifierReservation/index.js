
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import './index.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};

const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const ModifierReservation = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const { id } = useParams();
  const [passengers, setPassengers] = useState([]);
  const [flights, setFlights] = useState([]);
  const [initialValues, setInitialValues] = useState({});
  const [selectedStatus, setSelectedStatus] = useState(null);


  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/Passager');
        setPassengers(response.data);
      } catch (error) {
        console.error('Error fetching passengers:', error);
      }
    };

    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/vols');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };


    const fetchReservationData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/reservation/${id}`);
        setInitialValues(response.data);
        form.setFieldsValue(response.data);
        setSelectedStatus(response.data.statut);

      } catch (error) {
        console.error('Error fetching reservation data:', error);
        message.error('Erreur lors de la récupération des données de la réservation. Veuillez réessayer.');
      }
    };

    fetchPassengers();
    fetchFlights();
    fetchReservationData();
  }, [form, id]);

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:8080/api/reservation/${id}`, values);
      message.success('Réservation modifiée avec succès!');
      navigate('/reservation');
    } catch (error) {
      console.error('Error updating reservation:', error);
      message.error('Erreur lors de la modification de la réservation. Veuillez réessayer.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
  };
  const handleStatusChange = (value) => {
    setSelectedStatus(value);
  };
  return (
    <>
      <h1 className="form-title">Modifier une Réservation</h1>
      <div className="form-container">
        <Form
          form={form}
          initialValues={initialValues}

          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="my-form"
        >

          <Form.Item
            style={{ width: '500px' }}

            label="Nombre de place"
            name="nbr_place_res"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir le nombre de place',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Prix"
            name="prix_reservation"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir le prix',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Statut de réservation" name="statut">
            <Select
              showSearch
              placeholder="Sélectionner le statut"
              optionFilterProp="children"
              onChange={handleStatusChange}
              filterOption={filterOption}
              options={[
                {
                  value: 'Confirmer',
                  label: 'Confirmer',
                },
                {
                  value: 'Annuler',
                  label: 'Annuler',
                },
              ]}
              value={selectedStatus}
            /> </Form.Item>
          <Form.Item label="Passager" name="id_passager">
            <Select
              showSearch
              placeholder="Sélectionner le passager"
              optionFilterProp="children"
              filterOption={filterOption}
              options={passengers.map((passenger) => ({
                value: passenger.cin,
                label: passenger.cin,
              }))}
            />
          </Form.Item>
          <Form.Item label="Vol" name="id_vol">
            <Select
              showSearch
              placeholder="Sélectionner le vol"
              optionFilterProp="children"
              filterOption={filterOption}
              options={flights.map((flight) => ({
                value: flight.num,
                label: flight.num,
              }))}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="submit-button">
              Modifier
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ModifierReservation;