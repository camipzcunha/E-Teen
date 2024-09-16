import App from './App.jsx'
import './index.css'

//imports para rotas
import ReactDOM from 'react-dom/client'
import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


//import paginas
import Sobre from './Paginas/Sobre/index.jsx'
import HomePage from './Paginas/HomePage/index.jsx'

//import Componente
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true, element:<HomePage/>},
      {path:'/Sobre', element:<Sobre/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
