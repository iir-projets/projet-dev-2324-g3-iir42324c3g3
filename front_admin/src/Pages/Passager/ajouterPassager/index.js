import React from 'react';
import { Button, Form, Input, Space } from 'antd';




const AjouterPassager = () => {
  const [form] = Form.useForm();

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
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
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
        name="nomPassager"
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
        name="prenomPassager"
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
        name="emailPassager"
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
        name="adressePassager"
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
        name="telephonePassager"
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