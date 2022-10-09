import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Instructors from './components/Instructors/Instructors';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/home', element: <Home></Home> },
        {
          path: '/courses',
          loader: () => fetch('courses.json'),
          element: <Courses></Courses>
        },
        { path: '/instructors', element: <Instructors></Instructors> },
        { path: '/about', element: <About></About> },
        { path: '/contact', element: <Contact></Contact> },
        { path: '*', element: <Error></Error> },
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
