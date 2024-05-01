import React from 'react';
import { Form, Input, Button, DatePicker, Select,Checkbox } from 'antd';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const onOk = (value) => {
  console.log('onOk: ', value);
};
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

const ModifierVol = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
  };

  return (
    <>
      <h1 className="form-title">Modifier un vol</h1>
      <div className="form-container">
        <Form
          {...layout}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="my-form"
        >


          <Form.Item
            label="Date de depart"
            name="DateD"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir la date',
              },
            ]}
          >
                 <DatePicker
      showTime
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
          </Form.Item>
          <Form.Item
            label="Date d'arrivée"
            name="DateA"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir la date',
              },
            ]}
          >
                 <DatePicker
      showTime
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
          </Form.Item>
          
            

          

          <Form.Item style={{width:"500px"}}
            label="Aeroport de depart"
            name="aeroportd"
           
          >

          <Select
    showSearch
    placeholder="Selectionner aeroport"
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
        
          <Form.Item style={{width:"500px"}}
            label="Aeroport d'arrivée"
            name="aeroporta"
           
          >

          <Select
    showSearch
    placeholder="Selectionner  aeroport"
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

          <Form.Item style={{width:"500px"}}
            label="Aeroport d'escal"
            name="aeroporte"
           
          >

          <Select
    showSearch
    placeholder="Selectionner  aeroport"
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
            label="Date d'escal"
            name="Datee"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir la date',
              },
            ]}
          >
                 <DatePicker
      showTime
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
          </Form.Item>

          <Form.Item
            label="Allez roteur"
            name="ar"
          
          >
            <Checkbox ></Checkbox>
          </Form.Item>
          <Form.Item 
            label="type de classe"
            name="type_classe"
           
          >

          <Select
    showSearch
    placeholder="Selectionner  classe"
    optionFilterProp="children"
    onChange
    onSearch
    filterOption={filterOption}
    options={[
      {
        value: '1r',
        label: '1er classe',
      },
      {
        value: '2c',
        label: '2eme classe',
      },
      {
        value: 'bc',
        label: 'business classe',
      },
      
    ]}
  />
          </Form.Item>
          <Form.Item 
            label="Avion"
            name="avion"
           
          >

          <Select
    showSearch
    placeholder="Selectionner  avion"
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

export default ModifierVol;