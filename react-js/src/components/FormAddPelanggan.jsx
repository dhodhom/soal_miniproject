import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddPelanggan = () => {
   const [idpelanggan, setIdpelanggan] = useState('');
   const [nama, setNama] = useState('');
   const [domisili, setDomisili] = useState('');
   const [jeniskelamin, setJeniskelamin] = useState('');
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   const saveProduct = async (e) => {
      e.preventDefault();
      try {
         await axios.post('http://localhost:8000/api/pelanggan', {
            id_pelanggan: idpelanggan,
            nama: nama,
            domisili: domisili,
            jenis_kelamin: jeniskelamin
         });
         navigate('/pelanggan');
      } catch (error) {
         if(error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   return (
      <div>
         <h1 className='title' >Pelanggan</h1>
         <h2 className='subtitle'>Add New Pelanggan</h2>
         <div className="card is-shadowless">
            <div className="card-content">
               <div className="content">
               <form onSubmit={saveProduct}>
                     <p className='has-text-centered'>{msg}</p>
                     <div className='field'>
                        <label className='label'>ID PELANGGAN</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='ID PELANGGAN' value={idpelanggan} onChange={(e) => setIdpelanggan(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>NAMA</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='NAMA' value={nama} onChange={(e) => setNama(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>DOMISILI</label>
                        <div className='control'>
                           <input type='text' className='input' placeholder='DOMISILI' value={domisili} onChange={(e) => setDomisili(e.target.value)} />
                        </div>
                     </div>
                     <div className='field'>
                        <label className='label'>JENIS KELAMIN</label>
                        <div className='control'>
                           <div className='select is-fullwidth'>
                              <select onChange={(e) => setJeniskelamin(e.target.value)}>
                                 <option value=''></option>
                                 <option value='PRIA'>PRIA</option>
                                 <option value='WANITA'>WANITA</option>
                              </select>
                           </div>
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

export default FormAddPelanggan