import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Createbooks } from './pages/Createbooks'
import { Deletebooks } from './pages/Deletebooks'
import { Updatebooks } from './pages/Updatebooks'
import { Showbooks } from './pages/Showbooks'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<Createbooks />} />
      <Route path='/books/delete/:id' element={<Deletebooks />} />
      <Route path='/books/edit/:id' element={<Updatebooks />} />
      <Route path='/books/details/:id' element={<Showbooks />} />
    </Routes>
  )
}
