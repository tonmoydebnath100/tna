import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home';
import Tna from './Pages/Tna';
import Dashborad from './Pages/Dashborad';
import Starting from './Pages/Starting';
import Saveddashboard from './Pages/Saveddashboard';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Starting></Starting>
        
      },
      {
        path: '/tnahome',
        element: <Home></Home>
      },
      {
        path: '/tna',
        element: <Tna></Tna>
      },
      
    ],
  },
  {
    path: '/:style',
    element: <Dashborad></Dashborad>,
    loader: ({params})=> fetch(`https://tna-server.web.app/details/${params.style}`)
    
  },
  {
    path: 'saved/:style',
    element: <Saveddashboard></Saveddashboard>,
    loader: ({params})=> fetch(`https://tna-server.web.app/details/${params.style}`)
    
  },
])
  return (
    <div className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
