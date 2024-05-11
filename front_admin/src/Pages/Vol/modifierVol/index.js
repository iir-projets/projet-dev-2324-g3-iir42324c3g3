import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, Select, Checkbox } from 'antd';
import './index.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

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
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const [volData, setVolData] = useState({
    num: '',
    date_depart: '',
    date_arrive: '',
    id_aeroport_depart: '',
    id_aeroport_arrive: '',
    aller_retour: false,
    type_classe: '',
    id_aeroport_escal: '',
    escal_date: '',
    id_avion: '',
    prix: '',
  });

  useEffect(() => {
    const fetchVolData = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/vols/${id}`);
    const formattedData = {
      ...response.data,
      date_depart: moment(response.data.date_depart),
      date_arrive: moment(response.data.date_arrive),
      escal_date: moment(response.data.escal_date),
    };
    setVolData(formattedData);
    form.setFieldsValue(formattedData);
  } catch (error) {
    console.error('Error fetching vol data:', error);
  }
};

    fetchVolData();
  }, [id, form]);

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:8080/api/vols/${id}`, values);
      navigate('/vol');
    } catch (error) {
      console.error('Error updating vol:', error);
    }
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
          form={form}
        >
          <Form.Item
            label="Date de depart"
            name="date_depart"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir la date',
              },
            ]}
          >
            <DatePicker showTime onOk={onOk} />
          </Form.Item>
          <Form.Item
            label="Date d'arrivée"
            name="date_arrive"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir la date',
              },
            ]}
          >
            <DatePicker showTime onOk={onOk} />
          </Form.Item>

          <Form.Item
            label="Aeroport de depart"
            name="id_aeroport_depart"
            style={{ width: '500px' }}
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

          <Form.Item
            label="Aeroport d'arrivée"
            name="id_aeroport_arrive"
            style={{ width: '500px' }}
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

          <Form.Item
            label="Aeroport d'escal"
            name="id_aeroport_escal"
            style={{ width: '500px' }}
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
          <Form.Item
            label="Date d'escal"
            name="escal_date"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir la date',
              },
            ]}
          >
            <DatePicker showTime onOk={onOk} />
          </Form.Item>

          <Form.Item label="Allez roteur" name="aller_retour">
            <Checkbox></Checkbox>
          </Form.Item>
          <Form.Item label="Type de classe" name="type_classe" style={{ width: '500px' }}>
            <Select
              showSearch
              placeholder="Selectionner classe"
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
          <Form.Item label="Avion" name="id_avion" style={{ width: '500px' }}>
            <Select
              showSearch
              placeholder="Selectionner avion"
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