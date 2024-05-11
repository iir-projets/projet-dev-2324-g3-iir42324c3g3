import React, { useState, useEffect } from 'react';
import './style.css';
import { Table, Pagination, Space, Button, Input, message, Modal } from 'antd';
import { SearchOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { confirm } = Modal;

const showTotal = (total) => `Total ${total} items`;

const Reservation = () => {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetchReservationData();
  }, []);

  const fetchReservationData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/reservation');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching reservation data:', error);
      message.error('Error fetching reservation data');
    }
  };

  const onChange = (page) => {
    setCurrent(page);
  };

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.id.toString().includes(searchQuery) ||
      item.passager.toString().includes(searchQuery) ||
      item.nbr_place_res.toString().includes(searchQuery) ||
      item.prix_reservation.toString().includes(searchQuery) ||
      item.statut.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.vol.toString().includes(searchQuery)
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

  const handleAddReservation = () => {
    navigate('/reservation/ajouterReservation');
  };

  const modifierReservation = (id) => {
    navigate(`/reservation/modifierReservation/${id}`);
  };

  const handleDelete = (id) => {
    confirm({
      title: 'Do you want to delete this reservation?',
      icon: <ExclamationCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:8080/api/reservation/${id}`);
          message.success('Reservation deleted successfully');
          fetchReservationData(); // Refresh table after deletion
        } catch (error) {
          console.error('Error deleting reservation:', error);
          message.error('Error deleting reservation');
        }
      },
    });
  };

  const columns = [
    {
      title: 'ID Reservation',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      ...getColumnSearchProps('id', 'ID Reservation'),
    },
    {
      title: 'CIN passager',
      dataIndex: 'id_passager',
      key: 'id_passager',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('id_passager', 'CIN passager'),
    },
    {
      title: 'Nombre De Place',
      dataIndex: 'nbr_place_res',
      key: 'nbr_place_res',
      ...getColumnSearchProps('nbr_place_res', 'Nombre De Place'),
    },
    {
      title: 'Prix De Reservation',
      dataIndex: 'prix_reservation',
      key: 'prix_reservation',
      ...getColumnSearchProps('prix_reservation', 'Prix De Reservation'),
    },
    {
      title: 'Statut',
      dataIndex: 'statut',
      key: 'statut',
      ...getColumnSearchProps('statut', 'Statut'),
    },
    {
      title: 'Numero De Vol',
      dataIndex: 'id_vol',
      key: 'id_vol',
      ...getColumnSearchProps('id_vol', 'Numero De Vol'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => modifierReservation(record.id)}>
            Modifier
          </Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            Supprimer
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Gestion Réservation</h1>
      <div className="searchContainer">
        <Input
          placeholder="Rechercher une Réservation"
          className="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} className="searchButton"></Button>
        <Button type="primary" className="addButton leftButton" onClick={handleAddReservation}>
          Ajouter une Réservation
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

export default Reservation;
