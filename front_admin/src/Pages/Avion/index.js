import React, { useState, useEffect } from 'react';
import './style.css';
import { Table, Pagination, Space, Button, Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const showTotal = (total) => `Total ${total} items`;

const Avion = () => {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvionData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/avion');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching avion data:', error);
        message.error('Erreur lors de la récupération des données des avions. Veuillez réessayer.');
      }
    };

    fetchAvionData();
  }, []);

  const onChange = (page) => {
    setCurrent(page);
  };

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.num.toString().includes(searchQuery) ||
      item.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.capacite.toString().includes(searchQuery)
    );
  });

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${title}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => confirm()}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
  });

  const handleAddAvion = () => {
    navigate('/avion/ajouterAvion');
  };

  const modifierAvion = (id) => {
    navigate(`/avion/modifierAvion/${id}`);
  };

  const supprimerAvion = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/avion/${id}`);
      setData(data.filter((item) => item.id !== id));
      message.success('Avion supprimé avec succès!');
    } catch (error) {
      console.error('Error deleting avion:', error);
      message.error('Erreur lors de la suppression de l\'avion. Veuillez réessayer.');
    }
  };
 

  const columns = [
    {
      title: 'Numero d avion',
      dataIndex: 'num',
      key: 'num',
      sorter: (a, b) => a.num - b.num,
      ...getColumnSearchProps('num', 'Numero d avion'),
    },
    {
      title: 'Nom d Avion',
      dataIndex: 'nom',
      key: 'nom',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('nom', 'Nom d Avion'),
    },
    {
      title: 'Capacite',
      dataIndex: 'capacite',
      key: 'capacite',
      ...getColumnSearchProps('capacite', 'Capacite'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => modifierAvion(record.num)}>
            Modifier
          </Button>
          <Button danger onClick={() => supprimerAvion(record.num)}>Supprimer</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Gestion Avion</h1>

      <div className="searchContainer">
        <Input
          placeholder="Rechercher une Avion"
          className="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} className="searchButton"></Button>
        <Button type="primary" className="addButton leftButton" onClick={handleAddAvion}>
          Ajouter un Avion
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

export default Avion;