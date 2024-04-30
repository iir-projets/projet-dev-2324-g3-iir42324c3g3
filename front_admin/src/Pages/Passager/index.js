import React, { useState, useEffect } from 'react';
import './style.css';
import { Table, Pagination, Space, Button, Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate  } from 'react-router-dom'; 


const showTotal = (total) => `Total ${total} items`;

const Passager = () => {
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

  

  const handleAddPassager = () => {
    
  };
 
  const modifierPassager = (id) => {
    
  };
  
  
  const voirPassager = (id) => {
   
  };

  const columns = [
    {
      title: 'CIN',
      dataIndex: 'CIN',
      key: 'CIN',
      sorter: (a, b) => a.id - b.id,
      ...getColumnSearchProps('CIN', 'CIN'),
    },
    {
      title: 'Nom de Passager',
      dataIndex: 'nom',
      key: 'nom',
      render: (text) => <a>{text}</a>,
      ...getColumnSearchProps('nom', 'nom'),
    },
    {
      title: 'Prenom de Passager',
      dataIndex: 'prenom',
      key: 'prenom',
      ...getColumnSearchProps('prenom', 'prenom'),
    },
    {
      title: 'Email de Passager',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email', 'email'),
    },
    {
      title: 'Adress de Passager',
      dataIndex: 'adress',
      key: 'adress',
      ...getColumnSearchProps('adress', 'adress'),
    },
    {
      title: 'Telephone de Passager',
      dataIndex: 'telephone ',
      key: 'telephone',
      ...getColumnSearchProps('telephone', 'telephone'),
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => voirPassager(record.id)}>Voir</Button>
          <Button type="primary" onClick={() => modifierPassager(record.id)}>Modifier</Button>
          <Button danger >
            Supprimer
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1>Gestion Passager</h1>

      <div className="searchContainer">
        <Input
          placeholder="Rechercher un vol"
          className="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} className="searchButton"></Button>
        <Button type="primary" className="addButton leftButton" onClick={handleAddPassager}>
          Ajouter un Passager
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

export default Passager;