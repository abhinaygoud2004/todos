import React, { Children } from 'react'
import SideBar from './components/sidebar/SideBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import High from './components/High/High'
import Low from './components/Low/Low'
import Medium from './components/Medium/Medium'
import AllTasks from './components/AllTasks/AllTasks'
import Personal from './components/Personal/Personal'
import Today from './components/Today/Today'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Today />
        },
        {
          path: "/AllTasks",
          element: <AllTasks />
        },
        {
          path: "/High",
          element: <High />
        },
        {
          path: "/Medium",
          element: <Medium />
        },
        {
          path: "/Low",
          element: <Low />
        },
        {
          path: "/Personal",
          element: <Personal />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App