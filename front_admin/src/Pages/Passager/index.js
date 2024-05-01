import React, { useState, useEffect } from 'react';
import './style.css';
import { Table, Space, Button, Input, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const { Column } = Table;

const Passager = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/Passager', {
          params: {
            page: currentPage - 1,
            size: 5,
          },
        });
        console.log(response.data);
        setData(response.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
        message.error('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, [currentPage]);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.cin.includes(searchQuery) ||
      item.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.prenom.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleAddPassager = () => {
    // Navigate to the page for adding a new passenger
    navigate('/passager/ajouterPassager');
  };



  const modifierPassager = (id) => {
    // Implement the logic to modify a passenger's details
    navigate(`/passager/modifierPassager/${id}`);
  };

  const handleDeletePassager = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/Passager/${id}`);
      setData(data.filter((passager) => passager.cin !== id));
      message.success('Passager supprimé avec succès!');
    } catch (error) {
      console.error('Error deleting passager:', error);
      message.error('Error deleting passager. Please try again later.');
    }
  };

  return (
    <>
      <h1>Gestion Passager</h1>

      <div className="searchContainer">
        <Input
          placeholder="Rechercher un passager"
          className="searchInput"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} className="searchButton"></Button>
        <Button type="primary" className="addButton leftButton" onClick={handleAddPassager}>
          Ajouter un passager
        </Button>
      </div>

      <Table
        dataSource={filteredData}
        pagination={{
          current: currentPage,
          pageSize: 5,
          total: data.length,
          onChange: onChange,
          showTotal: (total) => `Total ${total} items`,
        }}
      >
        <Column title="CIN" dataIndex="cin" key="cin" />
        <Column title="Nom de Passager" dataIndex="nom" key="nom" />
        <Column title="Prénom de Passager" dataIndex="prenom" key="prenom" />
        <Column title="Email de Passager" dataIndex="email" key="email" />
        <Column title="Adresse de Passager" dataIndex="adresse" key="adresse" />
        <Column title="Téléphone de Passager" dataIndex="telephone" key="telephone" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              
              <Button type="primary" onClick={() => modifierPassager(record.cin)}>
                Modifier
              </Button>
              <Button danger onClick={() => handleDeletePassager(record.cin)}>
                Supprimer
              </Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default Passager;