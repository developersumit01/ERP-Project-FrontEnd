import React from 'react'
import ReactDOM from 'react-dom/client'
import UserLogin from './UserLogin.jsx'
// import Calender from './Calneder'
import Dashboard from './Dashboard'
import MyProfile from './MyProfile'
import Background from './Backgroung'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Dashboard /> */}
    <Background />
    {/* <UserLogin /> */}
  </React.StrictMode>,
)