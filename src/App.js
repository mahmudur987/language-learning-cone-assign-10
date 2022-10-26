
import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="mx-auto  bg-slate-200  ">

      <RouterProvider router={route}></RouterProvider>

      <Toaster></Toaster>
    </div>
  );
}

export default App;
