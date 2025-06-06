import React, { useState } from 'react'
import './stockAnalysis.css'
import StockCards from './StockCards'
import { StockAnalasysOptions } from '../../Navdata/dashboardNavData'
import { Button } from 'antd';
import { MdAdd, MdArrowCircleDown, } from 'react-icons/md'
import ProgressBarSection from './ProgressBarSection'
import { useLocation, useParams } from 'react-router-dom'
const StockAnalasysSection = () => {



  const [activeNav, setActiveNav] = useState('');


  const Option =
    [
      {
        value: 'Today',
        label: 'today_date',
      },
      {
        value: 'YesterDay',
        label: 'Lucy',
      },
      {
        value: 'Last week',
        label: 'last_week',
      },
    ]

  const graphOption1 = [
    {
      heading: 'Engine',
      percent: 40
      ,
      count: 50
    },
    {
      heading: 'Electronic',
      percent: 60
      ,
      count: 50
    },
    {
      heading: 'Chemical',
      percent: 90
      ,
      count: 50
    },
    {
      heading: 'Battery',
      percent: 10
      ,
      count: 50
    },
    {
      heading: 'Fabrication',
      percent: 70
      ,
      count: 50
    },
    {
      heading: 'Steel',
      percent: 100,
      count: 50
    },
  ]

  const graphOption2 = [
    {
      heading: 'CNC',
      percent: 40
      ,
      count: 50
    },
    {
      heading: 'Coloring',
      percent: 60
      ,
      count: 50
    },
    {
      heading: 'Banding',
      percent: 90
      ,
      count: 50
    },
    {
      heading: 'Febrication',
      percent: 10
      ,
      count: 50
    },
    {
      heading: 'Assembling',
      percent: 70
      ,
      count: 50
    },
    {
      heading: 'Testing',
      percent: 100,
      count: 50
    },
  ]

  const graphOption3 = [
    {
      heading: '30kv',
      percent: 40
      ,
      count: 50
    },
    {
      heading: '90kv',
      percent: 60
      ,
      count: 50
    },
    {
      heading: '200kv',
      percent: 90
      ,
      count: 50
    },
    {
      heading: '600kv',
      percent: 10
      ,
      count: 50
    },
    {
      heading: '1100kv',
      percent: 70
      ,
      count: 50
    },
    {
      heading: '1500kv',
      percent: 100,
      count: 50
    },
  ]

  const [graphOption, setgraphOption] = useState(() => graphOption1)

  const HandelNavClick = (value) => {
    setActiveNav(value)

    switch (value) {
      case 'Product':
        setgraphOption(graphOption1);
        break;
      case 'Department':
        setgraphOption(graphOption2);
        break;
      case 'Production':
        setgraphOption(graphOption3);
        break;
      default:
        setgraphOption(graphOption1);
    }
  }

  const location = useLocation()
  const currentPath = location.pathname



  const [tougle, setTougle] = useState(() => { if (currentPath !== '/details') { return true } })

  const TougleHandler = () => {
    // console.log(currentPath)

    if (tougle === false) {
      return setTougle(() => true)

    }
    setTougle(false)
  }

const {id} =useParams()

  
  return (
    <>
          <div className="Targetheader"><h3>Factory : {id}</h3></div>

      {tougle ? <Button className='tougleBtn' type='primary' onClick={TougleHandler}><MdAdd />  Expand</Button> : <Button type='primary' className='tougleBtn' onClick={TougleHandler}><MdArrowCircleDown /> Close</Button>}


      <div className={tougle === true ? 'AnalasysComponantTougle' : 'AnalasysComponant'}>
        <StockCards />

        <ProgressBarSection graphOption={graphOption} activeNav={activeNav} HandelNavClick={HandelNavClick} StockAnalasysOptions={StockAnalasysOptions} Option={Option} />
      </div>
    </>
  )
}

export default StockAnalasysSection