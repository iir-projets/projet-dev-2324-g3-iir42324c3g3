import React from 'react';
import { Button, Form, Input, Space } from 'antd';

const ModifierAvion = () => {
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
        name="numeroAvion"
        label="Numéro d'Avion"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nomAvion"
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

export default ModifierAvion;