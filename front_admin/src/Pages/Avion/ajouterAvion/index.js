import React from 'react';
import { Button, Form, Input, Space, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AjouterAvion = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

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
      await axios.post('http://localhost:8080/api/avion', values);
      message.success('Avion ajouté avec succès!');
      navigate('/avion');
    } catch (error) {
      console.error('Error adding avion:', error);
      message.error('Erreur lors de l\'ajout de l\'avion. Veuillez réessayer.');
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
        <Button type="primary" htmlType="submit" className="submit-button">
              Ajouter
            </Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AjouterAvion;