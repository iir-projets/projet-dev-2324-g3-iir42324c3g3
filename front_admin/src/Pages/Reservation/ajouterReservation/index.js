import React from 'react';
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

const AjouterReservation = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
  };

  return (
    <>
      <h1 className="form-title">Ajouter une Reservation</h1>
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
            name="prix"
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
    onChange
    onSearch
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
            name="passager"
           
          >

          <Select
    showSearch
    placeholder="Selectionner  passager"
    optionFilterProp="children"
    onChange
    onSearch
    filterOption={filterOption}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
          </Form.Item>

          
        
        <Form.Item 
          label="Vol"
          name="vol"
         
        >

        <Select
  showSearch
  placeholder="Selectionner  vol"
  optionFilterProp="children"
  onChange
  onSearch
  filterOption={filterOption}
  options={[
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
    {
      value: 'tom',
      label: 'Tom',
    },
  ]}
/>
        </Form.Item>
          

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="submit-button">
              Ajouter
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AjouterReservation;