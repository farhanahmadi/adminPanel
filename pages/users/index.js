import React from 'react'
import Head from 'next/head'

//import modules
import axios from 'axios'

//import components
import Layout from '../../components/layout/Layout'
import UsersList from '../../components/users/UsersList'
import { MainLink } from '../../components/BaseUrl/BaseUrl'

const index = ({userlist}) => {
  return (
    <Layout>
        <Head>
            <title>لیست کاربران</title>
        </Head>
        <UsersList userlist={userlist} />
    </Layout>
  )
}

export async function getServerSideProps(context){
  const userList = await axios.get(`${MainLink}/user/`);



  const userListResponse = userList.data;
  return{
    props:{userlist: userListResponse }
  }
}

export default index