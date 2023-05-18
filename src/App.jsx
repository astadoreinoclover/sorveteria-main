import Tabela from './Tabela'
import Cabecario from './cabecario'
import Comentario from './Cometario';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Tabela /></div>,
  },
  {
    path:"/comentarios/:id",
    element: <Comentario />
  }
]);

function App() {

  return (
    <div className='container'>
      <Cabecario />
      <RouterProvider router={router} />
      

    </div>
  )
}

export default App
