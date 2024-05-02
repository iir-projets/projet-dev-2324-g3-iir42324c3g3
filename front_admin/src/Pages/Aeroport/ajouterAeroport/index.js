import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
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

const AjouterAeroport = () => {
  const navigate = useNavigate();
  const [ville, setVilles] = useState([]);
  const [pays, setPays] = useState([]);
  

  useEffect(() => {
    const fetchVilles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/Ville');
        setVilles(
          response.data.map((ville) => ({
            value: ville.libelle,
            label: ville.libelle,
          }))
        );
      } catch (error) {
        console.error('Error fetching cities:', error);
        message.error('Erreur lors de la récupération des villes');
      }
    };

    const fetchPays = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/pays');
        setPays(
          response.data.map((pays) => ({
            value: pays.libelle,
            label: pays.libelle,
          }))
        );
      } catch (error) {
        console.error('Error fetching countries:', error);
        message.error('Erreur lors de la récupération des pays');
      }
    };

    fetchVilles();
    fetchPays();
  }, []);

  const onFinish = async (values) => {
    try {
      await axios.post('http://localhost:8080/api/aeroport', values);
      message.success('Aéroport ajouté avec succès!');
      navigate('/aeroport');
    } catch (error) {
      console.error('Error adding aeroport:', error);
      message.error('Erreur lors de l\'ajout de l\'aéroport. Veuillez réessayer.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
  };

  return (
    <>
      <h1 className="form-title">Ajouter un aeroport</h1>
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
          <Form.Item
            label="Ville d'aeroport"
            name="ville"
            rules={[
              {
                required: true,
                message: 'Veuillez sélectionner une ville',
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Sélectionner une ville"
              optionFilterProp="children"
              filterOption={filterOption}
              options={ville}
            />
          </Form.Item>
          <Form.Item
            label="Pays d'aeroport"
            name="pays"
            rules={[
              {
                required: true,
                message: 'Veuillez sélectionner un pays',
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Sélectionner un pays"
              optionFilterProp="children"
              filterOption={filterOption}
              options={pays}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="submit-button">
              Ajouter
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AjouterAeroport;