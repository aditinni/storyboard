import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { CommonLayout } from './Layouts/CommonLayout';
import { Home } from './Pages/Home';
import Mystories from './Pages/Mystories';
import { About } from './Pages/About';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <CommonLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'my-stories', element: <Mystories /> },
        { path: 'about', element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
