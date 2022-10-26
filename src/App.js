
import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './Routes/Route/Route';
function App() {
  return (
    <div className="mx-auto  bg-slate-200  ">

      <RouterProvider router={route}></RouterProvider>


    </div>
  );
}

export default App;
