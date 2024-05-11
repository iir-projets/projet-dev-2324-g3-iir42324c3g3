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

const ModifierAeroport = () => {
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
            label="Nom d'aeroport"
            name="nom_aeroport"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir le nom',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item style={{width:"500px"}}
            label="ville d'aeroport"
            name="ville"
           
          >

          <Select
    showSearch
    placeholder="Selectionner ville"
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
            label="pays d'aeroport"
            name="pays"
           
          >

          <Select
    showSearch
    placeholder="Selectionner  pays"
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
              Modifier
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ModifierAeroport;