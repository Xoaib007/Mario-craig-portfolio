import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="App bg-black text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
