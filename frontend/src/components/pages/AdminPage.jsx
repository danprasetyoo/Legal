import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Button from '../common/Button';
import Input from '../common/Input';
import Card from '../common/Card';

const AdminPage = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await api.get('/admin/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await api.put(`/admin/items/${form.id}`, form);
      } else {
        await api.post('/admin/items', form);
      }
      fetchItems();
      setForm({ id: '', name: '', email: '' });
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/admin/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Card className="mb-6">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
          />
          <Button type="submit" className="w-full">
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </form>
      </Card>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 p-2">{item.id}</td>
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">{item.email}</td>
              <td className="border border-gray-300 p-2">
                <Button onClick={() => handleEdit(item)} className="mr-2">
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
