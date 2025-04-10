import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Button from '../common/Button';
import Input from '../common/Input';
import Card from '../common/Card';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await api.get('/documents');
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await api.post('/documents', formData);
      fetchDocuments();
      setFile(null);
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Dokumen Hukum</h1>
        <Card className="mb-6">
          <form onSubmit={handleUpload}>
            <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <Button type="submit" className="w-full">
              Unggah Dokumen
            </Button>
          </form>
        </Card>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Nama Dokumen</th>
              <th className="border border-gray-300 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="border border-gray-300 p-2">{doc.name}</td>
                <td className="border border-gray-300 p-2">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Unduh
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Documents;
