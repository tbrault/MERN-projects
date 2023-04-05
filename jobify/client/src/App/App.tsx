import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from '../pages/LandingPage/Landing';
import NotFound from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Jobify</div>,
    errorElement: <NotFound />,
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
  return <RouterProvider router={router} />;
}

export default App;
