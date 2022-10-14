import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddBarang = () => {
   const [kode, setKode] = useState('');
   const [nama, setNama] = useState('');
   const [kategori, setKategori] = useState('');
   const [harga, setHarga] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   const saveProduct = async (e) => {
      e.preventDefault();
      try {
         await axios.post('http://localhost:8000/api/barang', {
            kode: kode,
            nama: nama,
            kategori: kategori,
            harga: harga
         });
         navigate('/barang');
      } catch (error) {
         if(error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   return (
      <div>
         <h1 className='title' >Barang</h1>
         <h2 className='subtitle'>Add New Barang</h2>
         <div className="card is-shadowless">
            <div className="card-content">
               <div className="content">
                  <form onSubmit={saveProduct}>
                     <p className='has-text-centered'>{msg}</p>
                     <div className='field'>
                        <label className='label'>KODE</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='KODE' value={kode} onChange={(e) => setKode(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>NAMA</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='NAMA' value={nama} onChange={(e) => setNama(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>KATEGORI</label>
                        <div className='control'>
                           <div className='select is-fullwidth'>
                              <select onChange={(e) => setKategori(e.target.value)}>
                                 <option value=''></option>
                                 <option value='ATK'>ATK</option>
                                 <option value='ELEKTRONIK'>ELEKTRONIK</option>
                                 <option value='MASAK'>MASAK</option>
                                 <option value='RT'>RT</option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>HARGA</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='HARGA' value={harga} onChange={(e) => setHarga(e.target.value)} />
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

export default FormAddBarang