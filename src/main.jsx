import App from './App.jsx'
import './index.css'

//imports para rotas
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


//import paginas
import Album from './Paginas/Album/index.jsx'
import FormLogin from './Paginas/FormLogin/index.jsx'
import HomeLogin from './Paginas/HomeLogin/index.jsx'
import HomePage from './Paginas/HomePage/index.jsx'
import Loja from './Paginas/Loja/index.jsx'
import Roleta from './Paginas/Roleta/index.jsx'

//import Componente
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/Login', element: <FormLogin /> },
      { path: '/Home', element: <HomeLogin /> },
      { path: '/Album', element: <Album /> },
      { path: '/Loja', element: <Loja /> },
      { path: '/Roleta', element: <Roleta /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
