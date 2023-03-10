import React from 'react'
import Layout from '../Layout'
import './css/stockList/StockList.css'
import './css/template/core.css'
import './css/template/theme-default.css'
import StockCard from './StockCard'


function StockList() {
  return (
    <Layout>
      <StockCard  />
    </Layout>

  )
};

export default StockList