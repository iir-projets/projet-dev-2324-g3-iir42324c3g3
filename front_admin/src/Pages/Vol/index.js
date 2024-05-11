import React, { useState, useEffect } from 'react';
import './index.css';
import { Table, Pagination, Space, Button, Input, message, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const showTotal = (total) => `Total ${total} items`;

const Vol = () => {
  const [current, setCurrent] = useState(1);
  const [volData, setVolData] = useState([]);
  const [aeroportData, setAeroportData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [volResponse, aeroportResponse] = await Promise.all([
          axios.get('http://localhost:8080/api/vols'),
          axios.get('http://localhost:8080/api/aeroport'),
        ]);
        setVolData(volResponse.data);
        setAeroportData(aeroportResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        message.error('Erreur lors de la récupération des données. Veuillez réessayer.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onChange = (page) => {
    setCurrent(page);
  };

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = volData.filter((item) => {
    return (
      item.num.toString().includes(searchQuery) ||
      item.date_depart.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date_arrive.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleAddMonument = () => {
    navigate('/vol/ajouterVol');
  };

  const modifierMonument = (id) => {
    navigate(`/vol/modifierVol/${id}`);
  };

  const voirMonuments = (id) => {
    navigate(`/vol/voirVol/${id}`);
  };

  const columns = [
    {
      title: 'Numero de Vol',
      dataIndex: 'num',
      key: 'num',
      sorter: (a, b) => a.num - b.num,
      ...getColumnSearchProps('num', 'Numero de Vol'),
    },
    {
      title: 'Date de Depart',
      dataIndex: 'date_depart',
      key: 'date_depart',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('date_depart', 'Date de Depart'),
    },
    {
      title: 'Date d\'arrivée',
      dataIndex: 'date_arrive',
      key: 'date_arrive',
      ...getColumnSearchProps('date_arrive', 'Date d\'arrivée'),
    },
    {
      title: 'Aeroport de depart',
      dataIndex: 'id_aeroport_depart',
      key: 'id_aeroport_depart',
      render: (id) => {
        const aeroport = aeroportData.find((item) => item.num === id);
        return aeroport ? aeroport.nom_aeroport : '';
      },
      ...getColumnSearchProps('id_aeroport_depart', 'Aeroport de depart'),
    },
    {
      title: 'Aeroport d\'arrivée',
      dataIndex: 'id_aeroport_arrive',
      key: 'id_aeroport_arrive',
      render: (id) => {
        const aeroport = aeroportData.find((item) => item.num === id);
        return aeroport ? aeroport.nom_aeroport : '';
      },
      ...getColumnSearchProps('id_aeroport_arrive', 'Aeroport d\'arrivée'),
    },
    {
      title: 'Aeroport Escale',
      dataIndex: 'id_aeroport_escal',
      key: 'id_aeroport_escal',
      render: (id) => {
        const aeroport = aeroportData.find((item) => item.num === id);
        return aeroport ? aeroport.nom_aeroport : '';
      },
      ...getColumnSearchProps('id_aeroport_escal', 'Aeroport Escale'),
    },
    {
      title: 'Date Escale',
      dataIndex: 'escal_date',
      key: 'escal_date',
      ...getColumnSearchProps('escal_date', 'Date Escale'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => voirMonuments(record.num)}>Voir</Button>
          <Button type="primary" onClick={() => modifierMonument(record.num)}>
            Modifier
          </Button>
          <Button danger>Supprimer</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Gestion Vol</h1>

      <div className="searchContainer">
        <Input
          placeholder="Rechercher un vol"
          className="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} className="searchButton"></Button>
        <Button type="primary" className="addButton leftButton" onClick={handleAddMonument}>
          Ajouter un Vol
        </Button>
      </div>

      {loading ? (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Vol;