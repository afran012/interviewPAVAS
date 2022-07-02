import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginUser from '../container/users/LoginUser'
import Register from '../container/users/Register'

const PublicDashboardRoutes = () => {
  return (
    <Routes>
            <Route path='/login' element = {<LoginUser/>} />
            <Route path="/newuser" element={<Register />} />
            <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default PublicDashboardRoutes