import React, { useState, useEffect } from 'react';
import './style.css';
import { Table, Pagination, Space, Button, Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate  } from 'react-router-dom'; 


const showTotal = (total) => `Total ${total} items`;

const Reservation= () => {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
 
  const navigate = useNavigate(); 

  

  

  const onChange = (page) => {
    setCurrent(page);
  };

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.id.toString().includes(searchQuery) ||
      item.Titre.toLowerCase().includes(searchQuery.toLowerCase())
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
    
  };
 
  const modifierReservation = (id) => {
    
  };
  
  
  const voirReservation = (id) => {
   
  };

  const columns = [
    {
      title: 'ID Reservation',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      ...getColumnSearchProps('id', 'id'),
    },
    {
      title: 'CIN passager',
      dataIndex: 'CIN',
      key: 'CIN',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('CIN', 'CIN'),
    },
    {
      title: 'Nombre De Place',
      dataIndex: 'nbrePlace',
      key: 'nbrePlace',
      ...getColumnSearchProps('nbrePlace', 'nbrePlace'),
    },
    {
      title: 'Prix De Reservation',
      dataIndex: 'Prix',
      key: 'Prix',
      ...getColumnSearchProps('Prix', 'Prix'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ...getColumnSearchProps('status', 'status'),
    },
    {
      title: 'Numero De Vol',
      dataIndex: 'numVol',
      key: 'numVol',
      ...getColumnSearchProps('numVol', 'numVol'),
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => voirReservation(record.id)}>Voir</Button>
          <Button type="primary" onClick={() => modifierReservation(record.id)}>Modifier</Button>
          <Button danger >
            Supprimer
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Gestion Rerservation</h1>

      <div className="searchContainer">
        <Input
          placeholder="Rechercher une Reservation"
          className="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} className="searchButton"></Button>
        <Button type="primary" className="addButton leftButton" onClick={handleAddReservation}>
          Ajouter une Reservation
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