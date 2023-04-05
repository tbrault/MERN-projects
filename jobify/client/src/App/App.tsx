import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Jobify</div>,
    errorElement: <div>error</div>,
  },
  {
    path: 'landing',
    element: <Landing />,
  },
  {
    path: 'register',
    element: <div>register</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
