import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditPenjualan = () => {
   const [idnota, setIdnota] = useState('');
   const [tgl, setTgl] = useState('');
   const [kodepelanggan, setKodepelanggan] = useState('');
   const [subtotal, setSubtotal] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      const getDataById = async () => {
         try {
            const response = await axios.get(`http://localhost:8000/api/penjualan/${id}`);
            setIdnota(response.data.data.id_nota);
            setTgl(response.data.data.tgl);
            setKodepelanggan(response.data.data.kode_pelanggan);
            setSubtotal(response.data.data.subtotal);
         } catch (error) {
            setMsg(error.response.data.msg);
         }
      }

      getDataById();
   }, [id]);

   const updateData = async (e) => {
      e.preventDefault();
      try {
         await axios.put(`http://localhost:8000/api/penjualan/${id}`, {
            id_nota: idnota,
            tgl: tgl,
            kode_pelanggan: kodepelanggan,
            subtotal: subtotal
         });
         navigate('/barang');
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   return (
      <div>
         <h1 className='title' >Penjualan</h1>
         <h2 className='subtitle'>Update Penjualan</h2>
         <div className="card is-shadowless">
            <div className="card-content">
               <div className="content">
               <form onSubmit={updateData}>
                     <p className='has-text-centered'>{msg}</p>
                     <div className='field'>
                        <label className='label'>ID NOTA</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='ID NOTA' value={idnota} onChange={(e) => setIdnota(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>TGL</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='TGL' value={tgl} onChange={(e) => setTgl(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>KODE PELANGGAN</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='KODE PELANGGAN' value={kodepelanggan} onChange={(e) => setKodepelanggan(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>SUBTOTAL</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='SUBTOTAL' value={subtotal} onChange={(e) => setSubtotal(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <div className='control'>
                           <button type='submit' className='button is-success'>
                              Update
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FormEditPenjualan