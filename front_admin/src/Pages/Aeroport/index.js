import React, { useState, useEffect } from 'react';
import './style.css';
import { Table, Pagination, Space, Button, Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate  } from 'react-router-dom'; 


const showTotal = (total) => `Total ${total} items`;

const Aeroport= () => {
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

  

  const handleAddAeroport = () => {
    
  };
 
  const modifierAeroport = (id) => {
    
  };
  
  
  const voirAeroport = (id) => {
   
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
      dataIndex: 'nom',
      key: 'nom',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('nom', 'nom'),
    },
    {
      title: 'Ville',
      dataIndex: 'Ville',
      key: 'Ville',
      ...getColumnSearchProps('Ville', 'Ville'),
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
          <Button onClick={() => voirAeroport(record.id)}>Voir</Button>
          <Button type="primary" onClick={() => modifierAeroport(record.id)}>Modifier</Button>
          <Button danger >
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