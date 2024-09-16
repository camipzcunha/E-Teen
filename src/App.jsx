import './App.css'
import { Outlet } from 'react-router';

import Header from './Components/Header';


const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

export default App;

