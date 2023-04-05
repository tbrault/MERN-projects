import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Landing, Register } from '../pages/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Jobify</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'landing',
    element: <Landing />,
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
