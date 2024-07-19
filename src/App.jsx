import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import { useContext, useEffect } from "react"
import { AuthContext, FireBaseContext } from "./Context/Context"
import AddPost from "./Pages/AddPost"
import MyPosts from "./Pages/MyPosts"
import ViewPost from "./Pages/ViewPost"
import UserPosts from "./Pages/UserPosts"
import ProductPage from "./Pages/ProductPage"
import About from "./Pages/About"
import ContactPage from "./Pages/ContactPage"


const router = createBrowserRouter([
  {
    path:'/login',
    element:<LogIn/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/addPost',
    element:<AddPost/>
  },
  {
    path:'/myPosts',
    element:<MyPosts/>
  },
  {
    path:'/viewPost/:id',
    element:<ViewPost/>
  },
  {
    path:'/userPosts/:id',
    element:<UserPosts/>
  },
  {
    path:'/',
    element:<ProductPage/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<ContactPage/>
  }
])

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FireBaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>setUser(user))
  })
  return (
    <RouterProvider router={router}/>
  )
}

export default App