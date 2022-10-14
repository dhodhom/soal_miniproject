import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoListOutline } from 'react-icons/io5';

const Sidebar = () => {
   return (
      <div>
         <aside className="menu pl-2 has-shadow">
            <p className="menu-label">
               General
            </p>
            <ul className="menu-list">
               <li><NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink></li>
               <li><NavLink to={"/pelanggan"}><IoPerson/> Pelanggan</NavLink></li>
               <li><NavLink to={"/barang"}><IoListOutline/> Barang</NavLink></li>
               <li><NavLink to={"/penjualan"}><IoPricetag/> Penjualan</NavLink></li>
               <li><NavLink to={"/itempenjualan"}><IoPricetag/> Item Penjualan</NavLink></li>
            </ul>
         </aside>
      </div>
   )
}

export default Sidebar