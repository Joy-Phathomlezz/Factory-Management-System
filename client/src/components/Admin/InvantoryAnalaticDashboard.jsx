import React from 'react'
import DashboardNavBar from './DashboardNavBar/DashboardNavBar'
import Sidebar from '../Sidebar/Sidebar'
import StockAnalasysSection from './charts/StockAnalasysSection'
import {navOptions} from '../Navdata/dashboardNavData'

const InvantoryAnalaticDashboard = () => {
    return (
        <div className='layoutContainer'>
            <Sidebar />
            <div className="dashboardContainerLayout">

                <DashboardNavBar  navOptions={navOptions}/>
                
                <StockAnalasysSection/>
            </div>
        </div>
    )
}

export default InvantoryAnalaticDashboard