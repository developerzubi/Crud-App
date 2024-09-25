import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import Add from './component/Add';
import Navbar from './component/Navbar';
import Edit from './component/Edit';

const App = () => {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/add",
      element: <Add />
    },
    {
      path:"/edit/:id",
      element: <Edit />
    },
  ])
  return (
    <div>
     <RouterProvider router={route}>
     </RouterProvider> 
    </div>
  )
}

export default App
