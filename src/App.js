import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';
import Tna from './Pages/Tna';
import Dashborad from './Pages/Dashborad';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/:style',
        element: <Dashborad></Dashborad>,
        loader: ({params})=> fetch(`http://localhost:5000/details/${params.style}`)
        
      },
    ],
  }])
  return (
    <div className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
