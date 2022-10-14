import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddItemPenjualan = () => {

   const [nota, setNota] = useState('');
   const [kodebarang, setKodebarang] = useState('');
   const [qty, setQty] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   const saveProduct = async (e) => {
      e.preventDefault();
      try {
         await axios.post('http://localhost:8000/api/itempenjualan', {
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
         <h2 className='subtitle'>Add New Item Penjualan</h2>
         <div className="card is-shadowless">
            <div className="card-content">
               <div className="content">
                  <form onSubmit={saveProduct}>
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
                           <button className='button is-success'>
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

export default FormAddItemPenjualan