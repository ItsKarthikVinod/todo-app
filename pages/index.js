import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import UserDashboard from '../components/UserDashboard'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const {currentUser} = useAuth()
  console.log(currentUser)
  return (
    < >
      <Head>
        <title>UpToDate - Never Miss</title>
        <meta name="description" content="made by Karthik Vinod" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
      
    </>
  )
}
