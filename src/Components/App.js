import { Routes, Route } from 'react-router-dom';
import Inicio from './Routes/Inicio/Inicio';
import Navbar from './Routes/Navbar/Navbar';
import Acceder from './Acceder/Acceder';
import Tienda from './Tienda/Tienda';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Inicio />} />
        <Route path='tienda' element={<Tienda />} />
        <Route path='acceder' element={<Acceder />} />



      </Route>
    </Routes>
  )
}

export default App