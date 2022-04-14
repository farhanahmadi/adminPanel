import React from 'react'
import Head from 'next/head'



//import components
import Layout from '../../components/layout/Layout'
import AddProducts from '../../components/products/AddProducts'

const add_products = () => {
  return (
    <Layout>
        <Head>
            <title>ایجاد محصول</title>
        </Head>
        <AddProducts />
    </Layout>
  )
}

export default add_products