import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://localhost:8000/api/itempenjualan";

const Listitempenjualan = () => {

   const [getPost, setPost] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      const response = await axios.get(baseURL);
      setPost(response.data.data);
   }

   const deleteData = async (rowId) => {
      await axios.delete(`http://localhost:8000/api/itempenjualan/${rowId}`);
      getData();
   }

   return (
      <div>
         <h1 className='title' >Item Penjualan</h1>
         <h2 className='subtitle'>List Item Penjualan</h2>
         <Link to="/itempenjualan/add" className='button is-primary mb-2'>Add New</Link>
         <table className='table is-striped is-fullwidth'>
            <thead>
               <tr>
                  <th>NOTA</th>
                  <th>KODE BARANG</th>
                  <th>QTY</th>
                  <th>AKSI</th>
               </tr>
            </thead>
            <tbody>
               {getPost.map((row, index) => (
                  <tr key={row.id}>
                     <td>{row.nota}</td>
                     <td>{row.kode_barang}</td>
                     <td>{row.qty}</td>
                     <td>
                        <Link to={`/itempenjualan/edit/${row.id}`} className='button is-small is-info'>Edit</Link>
                        <button onClick={() => deleteData(row.id)} className='button is-small is-danger'>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Listitempenjualan