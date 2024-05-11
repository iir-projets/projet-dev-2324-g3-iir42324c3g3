import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Form, Input, Space,message } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const ModifierPassager = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({});


  useEffect(() => {
    const fetchPassagerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/Passager/${id}`);
        setInitialValues(response.data);
        form.setFieldsValue(response.data);
      } catch (error) {
        console.error('Error fetching passager data:', error);
        message.error('Erreur lors de la récupération des données du passager. Veuillez réessayer.');
      }
    };

    fetchPassagerData();
  }, [form, id]);

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:8080/api/Passager/${id}`, values);
      message.success('Passager modifié avec succès!');
      navigate('/passager');
    } catch (error) {
      console.error('Error updating passager:', error);
      message.error('Erreur lors de la modification du passager. Veuillez réessayer.');
    }
  };
 

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

  
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish} initialValues={initialValues}>
      <Form.Item
        name="cin"
        label="CIN"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nom"
        label="Nom du Passager"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="prenom"
        label="Prénom du Passager"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email du Passager"
        rules={[
          {
            required: true,
            type: 'email',
        },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="adresse"
        label="Adresse du Passager"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="telephone"
        label="Téléphone du Passager"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item >
      <Space>
        
            <Button type="primary" htmlType="submit" className="submit-button">
              Modifier
            </Button>
            <Button htmlType="reset">Reset</Button>
        </Space>
          </Form.Item>
    </Form>
  );
};

export default ModifierPassager;