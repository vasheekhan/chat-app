import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './pages/authentication/Login.jsx'
import Signup from './pages/authentication/Signup.jsx'
import Home from './pages/home/Home.jsx'
import {store} from "./store/store.js"
import {Provider} from "react-redux"

const router=createBrowserRouter([
{
path:"/",
element:<Home/>
},{
  path:"/login",
  element:<Login/>
},
{
  path:"/signup",
  element:<Signup/>
}

])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <App/>
<RouterProvider router={router}/>
   </Provider>
   
)
