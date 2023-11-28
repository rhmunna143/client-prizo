import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router'
import ContestProvider from './Hooks/ContestProvider'
import { Toaster } from 'react-hot-toast'
import QueryProvider from './Hooks/QueryProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContestProvider>
      <QueryProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </QueryProvider>
    </ContestProvider>
  </React.StrictMode>
)
