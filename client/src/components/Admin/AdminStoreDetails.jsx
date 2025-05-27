import React from 'react'
import "./AdminStoreDetails.css"
import StockAnalasysSection from './charts/StockAnalasysSection'
import Sidebar from '../Sidebar/Sidebar'
import DashboardNavBar from './DashboardNavBar/DashboardNavBar'
import InventoryTable from './InventoryTable'
import {navOptions} from "../Navdata/dashboardNavData"


const AdminStoreDetails = () => {




  return (
    <div className='layoutContainer'>
      <Sidebar />

      {/* <div className='navlayout'> */}

        <div className="storedetailscomponant">
        <DashboardNavBar  navOptions={navOptions}/>

         <StockAnalasysSection/>
          <InventoryTable/>

        {/* </div> */}
      </div>
    </div>
  )
}

export default AdminStoreDetails