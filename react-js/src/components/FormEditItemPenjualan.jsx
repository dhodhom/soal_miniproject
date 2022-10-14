import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditItemPenjualan = () => {
   const [nota, setNota] = useState('');
   const [kodebarang, setKodebarang] = useState('');
   const [qty, setQty] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      const getDataById = async () => {
         try {
            const response = await axios.get(`http://localhost:8000/api/itempenjualan/${id}`);
            setNota(response.data.data.nota);
            setKodebarang(response.data.data.kode_barang);
            setQty(response.data.data.qty);
         } catch (error) {
            setMsg(error.response.data.msg);
         }
      }

      getDataById();
   }, [id]);

   const updateData = async (e) => {
      e.preventDefault();
      try {
         await axios.put(`http://localhost:8000/api/itempenjualan/${id}`, {
            nota: nota,
            kode_barang: kodebarang,
            qty: qty
         });
         navigate('/itempenjualan');
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   return (
      <div>
         <h1 className='title' >Item Penjualan</h1>
         <h2 className='subtitle'>Update Item Penjualan</h2>
         <div className="card is-shadowless">
            <div className="card-content">
               <div className="content">
                  <form onSubmit={updateData}>
                     <p className='has-text-centered'>{msg}</p>
                     <div className='field'>
                        <label className='label'>NOTA</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='NOTA' value={nota} onChange={(e) => setNota(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>KODE BARANG</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='KODE BARANG' value={kodebarang} onChange={(e) => setKodebarang(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>QTY</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='QTY' value={qty} onChange={(e) => setQty(e.target.value)} />
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

export default FormEditItemPenjualan