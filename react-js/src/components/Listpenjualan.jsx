import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://localhost:8000/api/penjualan";

const Listpenjualan = () => {

   const [getPost, setPost] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      const response = await axios.get(baseURL);
      setPost(response.data.data);
   }

   const deleteData = async (rowId) => {
      await axios.delete(`http://localhost:8000/api/penjualan/${rowId}`);
      getData();
   }

   return (
      <div>
         <h1 className='title' >Penjualan</h1>
         <h2 className='subtitle'>List Penjualan</h2>
         <Link to="/penjualan/add" className='button is-primary mb-2'>Add New</Link>
         <table className='table is-striped is-fullwidth'>
            <thead>
               <tr>
                  <th>ID NOTA</th>
                  <th>TGL</th>
                  <th>KODE PELANGGAN</th>
                  <th>SUBTOTAL</th>
                  <th>AKSI</th>
               </tr>
            </thead>
            <tbody>
               {getPost.map((row, index) => (
                  <tr key={row.id}>
                     <td>{row.id_nota}</td>
                     <td>{row.tgl}</td>
                     <td>{row.kode_pelanggan}</td>
                     <td>{row.subtotal}</td>
                     <td>
                        <Link to={`/penjualan/edit/${row.id}`} className='button is-small is-info'>Edit</Link>
                        <button onClick={() => deleteData(row.id)} className='button is-small is-danger'>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Listpenjualan