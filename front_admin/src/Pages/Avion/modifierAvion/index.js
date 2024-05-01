import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Space, message } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ModifierAvion = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchAvionData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/avion/${id}`);
        form.setFieldsValue(response.data);
      } catch (error) {
        console.error('Error fetching avion data:', error);
        message.error('Erreur lors de la récupération des données de l\'avion. Veuillez réessayer.');
      }
    };

    fetchAvionData();
  }, [form, id]);

  const SubmitButton = ({ children }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
      form
        .validateFields({
          validateOnly: true,
        })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
      <Button type="primary" htmlType="submit" disabled={!submittable}>
        {children}
      </Button>
    );
  };

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:8080/api/avion/${id}`, values);
      message.success('Avion modifié avec succès!');
      navigate('/avion');
    } catch (error) {
      console.error('Error updating avion:', error);
      message.error('Erreur lors de la modification de l\'avion. Veuillez réessayer.');
    }
  };

  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
    

      <Form.Item
        name="nom"
        label="Nom d'Avion"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="capacite"
        label="Capacité"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton>Modifier</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ModifierAvion;