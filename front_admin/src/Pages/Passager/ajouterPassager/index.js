import React from 'react';
import { Button, Form, Input, Space,message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AjouterPassager = () => {
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
      await axios.post('http://localhost:8080/api/Passager', values);
      message.success('Passager ajouté avec succès!');
      navigate('/Passager'); // Navigate to the list of passengers
    } catch (error) {
      console.error('Error adding passager:', error);
      message.error('Erreur lors de l\'ajout du passager. Veuillez réessayer.');
    }
  };
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
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
              Ajouter
            </Button>
            <Button htmlType="reset">Reset</Button>
        </Space>
          </Form.Item>
    
    </Form>
  );
};

export default AjouterPassager;