
import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { authContext } from './UserContext/UserContext';
function App() {
  const { theme } = useContext(authContext);
  return (
    <div className={` ${theme ? "bg-slate-300" : " bg-slate-100"}`} data-theme="cupcake"  >

      <RouterProvider router={route}></RouterProvider>

      <Toaster></Toaster>
    </div>
  );
}

export default App;
