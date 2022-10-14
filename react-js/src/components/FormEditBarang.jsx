import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditBarang = () => {
   const [kode, setKode] = useState('');
   const [nama, setNama] = useState('');
   const [kategori, setKategori] = useState('');
   const [harga, setHarga] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      const getDataById = async () => {
         try {
            const response = await axios.get(`http://localhost:8000/api/barang/${id}`);
            setKode(response.data.data.kode);
            setNama(response.data.data.nama);
            setKategori(response.data.data.kategori);
            setHarga(response.data.data.harga);
         } catch (error) {
            setMsg(error.response.data.msg);
         }
      }

      getDataById();
   }, [id]);

   const updateData = async (e) => {
      e.preventDefault();
      try {
         await axios.put(`http://localhost:8000/api/barang/${id}`, {
            kode: kode,
            nama: nama,
            kategori: kategori,
            harga: harga
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
         <h1 className='title' >Barang</h1>
         <h2 className='subtitle'>Update Barang</h2>
         <div className="card is-shadowless">
            <div className="card-content">
               <div className="content">
                  <form onSubmit={updateData}>
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
                              <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
                                 <option></option>
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

export default FormEditBarang