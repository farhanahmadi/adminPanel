import React from 'react'
import Head from 'next/head'



//import components
import Layout from '../../components/layout/Layout'
import OrderList from '../../components/order/OrderList'

const index = () => {
  return (
    <Layout>
        <Head>
            <title>لیست سفارشات</title>
        </Head>
        <OrderList />
    </Layout>
  )
}

export default index