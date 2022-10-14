import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddPenjualan = () => {
   const [idnota, setIdnota] = useState('');
   const [tgl, setTgl] = useState('');
   const [kodepelanggan, setKodepelanggan] = useState('');
   const [subtotal, setSubtotal] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   const saveProduct = async (e) => {
      e.preventDefault();
      try {
         await axios.post('http://localhost:8000/api/penjualan', {
            id_nota: idnota,
            tgl: tgl,
            kode_pelanggan: kodepelanggan,
            subtotal: subtotal
         });
         navigate('/penjualan');
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   return (
      <div>
         <h1 className='title' >Penjualan</h1>
         <h2 className='subtitle'>Add New Penjualan</h2>
         <div className="card is-shadowless">
            <div className="card-content">
               <div className="content">
                  <form onSubmit={saveProduct}>
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
                              Save
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

export default FormAddPenjualan