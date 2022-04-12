import React from 'react'
import Head from 'next/head'



//import components
import Layout from '../../components/layout/Layout'
import UsersList from '../../components/users/UsersList'

const index = () => {
  return (
    <Layout>
        <Head>
            <title>لیست کاربران</title>
        </Head>
        <UsersList />
    </Layout>
  )
}

export default index