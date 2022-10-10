import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Courses from './components/Courses/Courses';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Instructors from './components/Instructors/Instructors';
import Main from './layouts/Main';
import { courseDetails } from './utillities/courseDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        {
          path: '/courses',
          loader: () => fetch('https://mocki.io/v1/d91e1cc3-b018-4f43-b6d0-82e7dc99c902'),
          element: <Courses></Courses>
        },
        {
          path: '/course/:id',
          loader: ({ params }) => courseDetails(params.id),
          element: <CourseDetails></CourseDetails>
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
