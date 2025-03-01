import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CommonLayout } from './Layouts/CommonLayout';
import { Home } from './Pages/Home';
import  Mystories  from './Pages/Mystories';
import { About } from './Pages/About';

function App() {
  const router = createBrowserRouter([{
    path:"/",
    element: <CommonLayout/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"my-stories",
      element:<Mystories/> 
    },
    {
      path:"about",
      element:<About/>
    }
  ]

  }])
  return (
    
    <>
    <RouterProvider router={router}/>
  
    </>
  
  );
}

export default App;
