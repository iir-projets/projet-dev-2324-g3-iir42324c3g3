
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import './index.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


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

  const [form] = Form.useForm();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({});
  const [ville, setVille] = useState([]);
  const [pays, setPays] = useState([]);
  const [selectedVille, setSelectedVille] = useState(null);
  const [selectedPays, setSelectedPays] = useState(null);

  useEffect(() => {
    const fetchAeroportData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/aeroport/${id}`);
        setInitialValues(response.data);
        form.setFieldsValue(response.data);
        setSelectedVille(response.data.ville);
        setSelectedPays(response.data.pays);
      } catch (error) {
        console.error('Error fetching aeroport data:', error);
        message.error('Erreur lors de la récupération des données du passager. Veuillez réessayer.');
      }
    };

    const fetchVilleAndPays = async () => {
      try {
        const villeResponse = await axios.get('http://localhost:8080/api/Ville');
        setVille(villeResponse.data.map((v) => ({ value: v.libelle , label: v.libelle })));

        const paysResponse = await axios.get('http://localhost:8080/api/pays');
        setPays(paysResponse.data.map((p) => ({ value: p.libelle , label: p.libelle })));
      } catch (error) {
        console.error('Error fetching ville and pays data:', error);
        message.error('Erreur lors de la récupération des données de ville et pays. Veuillez réessayer.');
      }
    };

    fetchAeroportData();
    fetchVilleAndPays();
  }, [form, id]);

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:8080/api/aeroport/${id}`, {
        ...values,
        ville: selectedVille,
        pays: selectedPays,
      });
      message.success('Aeroport modifié avec succès!');
      navigate('/aeroport');
    } catch (error) {
      console.error('Error updating aeroport:', error);
      message.error('Erreur lors de la modification du aeroport. Veuillez réessayer.');
    }


  const onFinish = async (values) => {
    

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
  };


  const handleVilleChange = (value) => {
    setSelectedVille(value);
  };

  const handlePaysChange = (value) => {
    setSelectedPays(value);
  };

  return (
    <>
      <h1 className="form-title">Modifier Aeroport</h1>
      <div className="form-container">
        <Form
          form={form}
          initialValues={initialValues}

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

          <Form.Item style={{ width: '500px' }} label="Ville d'aeroport" name="ville">
            <Select
              showSearch
              placeholder="Sélectionner la ville"
              optionFilterProp="children"
              onChange={handleVilleChange}
              onSearch
              filterOption={filterOption}
              options={ville}
              value={selectedVille}
            />
          </Form.Item>
          <Form.Item style={{ width: '500px' }} label="Pays d'aeroport" name="pays">
            <Select
              showSearch
              placeholder="Sélectionner le pays"
              optionFilterProp="children"
              onChange={handlePaysChange}
              onSearch
              filterOption={filterOption}
              options={pays}
              value={selectedPays}
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