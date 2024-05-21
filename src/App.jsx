import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import LayOut from './components/LayOut/LayOut'
import NotFound from './components/NotFound/NotFound'
import { Axios } from 'axios'

let main = createBrowserRouter([
  { path: '' , element:<LayOut/>,children:[
    { index:true,element: <Home/> },
    { path: 'about',element: <About/> },
    { path: 'portfolio',element: <Portfolio/> },
    { path: 'contact',element: <Contact/> },
    { path: '*',element: <NotFound/> },
  ]}
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={main}></RouterProvider>
    </>
  )
}

export default App
