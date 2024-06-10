import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Eliminar } from './components/Eliminar'
import { Mostrar } from './components/Mostrar'
import { Insertar } from './components/Insertar'
import { Buscar } from './components/Buscar'
import './App.css'

function App() {
  return (
    <>
      <div className='w3-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Eliminar/>}></Route>
          <Route path="/mostrar" element={<Mostrar/>}></Route>
          <Route path="/insertar" element={<Insertar/>}></Route>
          <Route path="/buscar" element={<Buscar/>}></Route>
          <Route path="/*" element={<Navigate to='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
