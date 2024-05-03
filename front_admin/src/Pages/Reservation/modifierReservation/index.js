import React,{ useState, useEffect } from 'react';
import { Form, Input, Button,  Select,Checkbox } from 'antd';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
  const [passengers, setPassengers] = useState([]);
  const [flights, setFlights] = useState([]);

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

    fetchPassengers();
    fetchFlights();
  }, []);

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/reservation', values);
      navigate('/reservation');
    } catch (error) {
      console.error('Error adding reservation:', error);
    }
  };


  

  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
  };

  return (
    <>
      <h1 className="form-title">modifier une Reservation</h1>
      <div className="form-container">
        <Form
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="my-form"
        >

<Form.Item style={{width:"500px"}}
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
          <Form.Item 
            label="Statut de reservation"
            name="statut"
           
          >

          <Select
    showSearch
    placeholder="Selectionner statut"
    optionFilterProp="children"
   
    filterOption={filterOption}
    options={[
      {
        value: 'Confirmer',
        label: 'confirmer',
      },
      {
        value: 'Annuler',
        label: 'anuller',
      },
      
    ]}
  />
          </Form.Item>
        
          <Form.Item 
            label="Passager"
            name="id_passager"
           
          >

          <Select
    showSearch
    placeholder="Selectionner  passager"
    optionFilterProp="children"
   
    filterOption={filterOption}
    options={passengers.map((passenger) => ({
      value: passenger.cin,
      label: passenger.cin,
    }))}
  />
          </Form.Item>

          
        
        <Form.Item 
          label="Vol"
          name="id_vol"
         
        >

        <Select
  showSearch
  placeholder="Selectionner  vol"
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