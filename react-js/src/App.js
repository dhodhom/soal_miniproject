import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";

import Pelanggan from './pages/Pelanggan';
import Barang from './pages/Barang';
import Penjualan from './pages/Penjualan';
import Itempenjualan from './pages/Itempenjualan';

import AddPelanggan from './pages/AddPelanggan';
import AddBarang from './pages/AddBarang';
import AddPenjualan from './pages/AddPenjualan';
import AddItemPenjualan from './pages/AddItemPenjualan';

import EditPelanggan from './pages/EditPelanggan';
import EditBarang from './pages/EditBarang';
import EditPenjualan from './pages/EditPenjualan';
import EditItemPenjualan from './pages/EditItemPenjualan';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="/pelanggan" element={<Pelanggan/>} />
          <Route path="/barang" element={<Barang/>} />
          <Route path="/penjualan" element={<Penjualan/>} />
          <Route path="/itempenjualan" element={<Itempenjualan/>} />

          <Route path="/pelanggan/add" element={<AddPelanggan/>} />
          <Route path="/barang/add" element={<AddBarang/>} />
          <Route path="/penjualan/add" element={<AddPenjualan/>} />
          <Route path="/itempenjualan/add" element={<AddItemPenjualan/>} />

          <Route path="/pelanggan/edit/:id" element={<EditPelanggan/>} />
          <Route path="/barang/edit/:id" element={<EditBarang/>} />
          <Route path="/penjualan/edit/:id" element={<EditPenjualan/>} />
          <Route path="/itempenjualan/edit/:id" element={<EditItemPenjualan/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;