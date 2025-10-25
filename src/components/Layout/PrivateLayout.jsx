import React from 'react'
import PrivateHeader from '../UI/PrivateHeader'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import PrivateFooter from '../UI/PrivateFooter'

const PrivateLayout = () => {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} toastOptions={{
    className: '',
    style: {
      padding: '16px',
      fontSize : '18px',
      color: '#713200',
    },
  }
    } />
        <PrivateHeader/>
        <div>
            <Outlet/>
        </div>
        <PrivateFooter/>
    </>
  )
}

export default PrivateLayout