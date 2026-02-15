import './App.css';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryAPI from './common';
import Context from './context/context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './stores/userSlice';

function App() {

    const dispatch = useDispatch();

    const fetchUserDetails = async () => {
      const dataresponse = await fetch(summaryAPI.current_user.url, {   
        method: summaryAPI.current_user.method,
        credentials: 'include' // Include cookies in the request
      });

      const dataAPI = await dataresponse.json();


      if (dataAPI.success) {

        dispatch(setUserDetails(dataAPI.data)); // Dispatch user details to Redux store
        console.log("User details fetched successfully:", dataAPI);
        // You can also dispatch the user details to the Redux store here if needed
      } else {
        console.error("Failed to fetch user details:", dataAPI.message);
      }

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
