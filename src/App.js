import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <main className='min-h-[calc(90vh-90px)]'>
     <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
