import React from 'react'
import { Helmet } from 'react-helmet'
import HeaderHome from '../components/Header-Home'

const Home = () => {



  return (
    <>
      <Helmet>
        <body className='bg-gray-900'></body>
      </Helmet>



      {/* START HEADER INFARMATIONS */}
      <HeaderHome />
      {/* END HEADER INFARMATIONS */}
    </>
  )
}

export default Home