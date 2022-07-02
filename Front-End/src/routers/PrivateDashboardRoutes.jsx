import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from '../container/main/Main'
//import { NotesCRUD } from '../componentes/notesCRUD/MoviesCRUD' 

const PrivateDashboardRoutes = () => {
  return (
    <Routes>
            <Route path='/main' element = {<Main/>} />
            <Route path="/*" element={<Navigate to="/main" />} />
    </Routes>
  )
}

export default PrivateDashboardRoutes