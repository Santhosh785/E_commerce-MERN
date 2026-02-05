import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryAPI from './common';
import Context from './context/context';

function App() {


    const fetchUserDetails = async () => {
      const dataresponse = await fetch(summaryAPI.current_user.url, {   
        method: summaryAPI.current_user.method,
        credentials: 'include' // Include cookies in the request
      });

      const dataAPI = await dataresponse.json();
      console.log("User details response:", dataAPI); // Debugging log
    } 

 useEffect (() => {

      fetchUserDetails();

  }, [])


  return (
    <>
    <Context.Provider value={{

      fetchUserDetails

    }} >

      <ToastContainer position="top-center" />
      <Header/>
      <main className='min-h-[calc(90vh-90px)]'>
     <Outlet />
      </main>
      <Footer/>

      </Context.Provider>
    </>
  );
}

export default App;
