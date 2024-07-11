import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LogIn from "./Pages/LogIn"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import { useContext, useEffect } from "react"
import { AuthContext, FireBaseContext } from "./Context/Context"
import AddPost from "./Pages/AddPost"
import MyPosts from "./Pages/MyPosts"


const router = createBrowserRouter([
  {
    path:'/',
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