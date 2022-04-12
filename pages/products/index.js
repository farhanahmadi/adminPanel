import React from 'react'
import Head from 'next/head'



//import components
import Layout from '../../components/layout/Layout'
import ProductsList from '../../components/products/ProductsList'

const index = () => {
  return (
    <Layout>
        <Head>
            <title>لیست محصولات</title>
        </Head>
        <ProductsList />
    </Layout>
  )
}

export default index