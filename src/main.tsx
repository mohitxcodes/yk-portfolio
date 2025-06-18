import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AboutMe from './pages/about-me/AboutMe.tsx'
import LandingPage from './pages/landing/LandingPage.tsx'
import ContactPage from './pages/contact/ContactPage.tsx'
import HighLightPage from './pages/highligths/HighLightPage.tsx'
import BlogPage from './pages/blogs/BlogPage.tsx'
import StudentPage from './pages/student-corner/StudentPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/about',
        element: <AboutMe />,
      },
      {
        path: '/contact',
        element: <ContactPage />
      }, {
        path: '/highlights',
        element: <HighLightPage />
      },
      {
        path: '/blogs',
        element: <BlogPage />
      },
      {
        path: 'student-corner',
        element: <StudentPage />
      }
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
