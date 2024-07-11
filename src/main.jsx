import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FireBaseContextProvider,AuthContextProvider} from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FireBaseContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </FireBaseContextProvider>,
)
