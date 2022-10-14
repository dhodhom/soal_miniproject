import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://localhost:8000/api/barang";

const Listbarang = () => {
   const [getPost, setPost] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      const response = await axios.get(baseURL);
      setPost(response.data.data);
   }

   const deleteData = async (rowId) => {
      await axios.delete(`http://localhost:8000/api/barang/${rowId}`);
      getData();
   }

   return (
      <div>
         <h1 className='title' >Barang</h1>
         <h2 className='subtitle'>List Barang</h2>
         <Link to="/barang/add" className='button is-primary mb-2'>Add New</Link>
         <table className='table is-striped is-fullwidth'>
            <thead>
               <tr>
                  <th>KODE</th>
                  <th>NAMA</th>
                  <th>KATEGORI</th>
                  <th>HARGA</th>
                  <th>AKSI</th>
               </tr>
            </thead>
            <tbody>
               {getPost.map((row, index) => (
                  <tr key={row.id}>
                     <td>{row.kode}</td>
                     <td>{row.nama}</td>
                     <td>{row.kategori}</td>
                     <td>{row.harga}</td>
                     <td>
                        <Link to={`/barang/edit/${row.id}`} className='button is-small is-info'>Edit</Link>
                        <button onClick={() => deleteData(row.id)} className='button is-small is-danger'>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Listbarang