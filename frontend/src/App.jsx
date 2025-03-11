import { Route, Routes } from 'react-router'
import './App.css'
import Login from './pages/home'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </>
  )
}

