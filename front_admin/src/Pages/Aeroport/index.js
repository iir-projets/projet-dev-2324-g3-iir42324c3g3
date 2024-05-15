import React, { useState, useEffect } from 'react';
import './style.css';
import { Table, Pagination, Space, Button, Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const showTotal = (total) => `Total ${total} items`;

const Aeroport = () => {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [needRefresh, setNeedRefresh] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/aeroport');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching aeroports:', error);
        message.error('Erreur lors de la récupération des aéroports');
      }
    };

    fetchData();
  }, [needRefresh]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAeroportData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/aeroport');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching aeroport data:', error);
        message.error('Erreur lors de la récupération des données des aéroports. Veuillez réessayer.');
      }
    };

    fetchAeroportData();
  }, []);

  const onChange = (page) => {
    setCurrent(page);
  };

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = data.filter((item) => {
    return (
      (item.id && item.id.toString().includes(searchQuery)) ||
      (item.nom_aeroport && item.nom_aeroport.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.ville && item.ville.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.pays && item.pays.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const getColumnSearchProps = (dataIndex, title) => ({
    // ... (existing code)
  });

  const handleAddAeroport = () => {
    navigate('/aeroport/ajouterAeroport');
  };

  const modifierAeroport = (id) => {
    navigate(`/aeroport/modifierAeroport/${id}`);
  };

  const voirAeroport = (id) => {
    navigate(`/aeroport/view/${id}`);
  };

  const supprimerAeroport = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/aeroport/${id}`);
      setData(data.filter((item) => item.id !== id));
      message.success('Aéroport supprimé avec succès!');
      setNeedRefresh(!needRefresh);

    } catch (error) {
      console.error('Error deleting aeroport:', error);
      message.error('Erreur lors de la suppression de l\'aéroport. Veuillez réessayer.');
    }
  };

  const columns = [
    {
      title: 'Numero',
      dataIndex: 'num',
      key: 'num',
      sorter: (a, b) => a.id - b.id,
      ...getColumnSearchProps('num', 'num'),
    },
    {
      title: 'Nom Aeroport',
      dataIndex: 'nom_aeroport',
      key: 'nom_aeroport',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('nom_aeroport', 'nom_aeroport'),
    },
    {
      title: 'Ville',
      dataIndex: 'ville',
      key: 'ville',
      ...getColumnSearchProps('ville', 'ville'),
    },
    {
      title: 'Pays',
      dataIndex: 'pays',
      key: 'pays',
      ...getColumnSearchProps('pays', 'pays'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">

          <Button type="primary" onClick={() => modifierAeroport(record.num)}>
            Modifier
          </Button>
          <Button danger onClick={() => supprimerAeroport(record.num)}>
            Supprimer
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Gestion Aeroport</h1>

      <div className="searchContainer">
        <Input
          placeholder="Rechercher une Aeroport"
          className="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} className="searchButton"></Button>
        <Button type="primary" className="addButton leftButton" onClick={handleAddAeroport}>
          Ajouter un Aeroport
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          current: current,
          pageSize: 5,
          total: filteredData.length,
          onChange: onChange,
          showTotal: showTotal,
        }}
      />
    </>
  );
};

export default Aeroport;