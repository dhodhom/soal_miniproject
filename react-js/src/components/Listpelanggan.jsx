import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseURL = "http://localhost:8000/api/pelanggan";

const Listpelanggan = () => {

   const [getPost, setPost] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      const response = await axios.get(baseURL);
      setPost(response.data.data);
   }

   const deleteData = async (rowId) => {
      await axios.delete(`http://localhost:8000/api/pelanggan/${rowId}`);
      getData();
   }

   return (
      <div>
         <h1 className='title' >Pelanggan</h1>
         <h2 className='subtitle'>List Pelanggan</h2>
         <Link to="/pelanggan/add" className='button is-primary mb-2'>Add New</Link>
         <table className='table is-striped is-fullwidth'>
            <thead>
               <tr>
                  <th>ID PELANGGAN</th>
                  <th>NAMA</th>
                  <th>DOMISILI</th>
                  <th>JENIS KELAMIN</th>
                  <th>AKSI</th>
               </tr>
            </thead>
            <tbody>
               {getPost.map((row, index) => (
                  <tr key={row.id_pelanggan}>
                     <td>{row.id_pelanggan}</td>
                     <td>{row.nama}</td>
                     <td>{row.domisili}</td>
                     <td>{row.jenis_kelamin}</td>
                     <td>
                        <Link to={`/pelanggan/edit/${row.id}`} className='button is-small is-info'>Edit</Link>
                        <button onClick={() => deleteData(row.id)} className='button is-small is-danger'>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Listpelanggan