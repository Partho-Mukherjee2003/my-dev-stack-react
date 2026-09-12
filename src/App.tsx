import Nav from './Components/Nav';
import Banner from './Components/Banner';
import StackCards from "./Components/StackCards"
import type StackCardsType from "./Types/StackCards"
import Footer from './Components/Footer';
import { Suspense, useState } from 'react';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// *********  Data Fetching  **********
const dataFetch = async (): Promise<StackCardsType[]> => {
  const res = await fetch("/data.json");
  const data =await res.json();
  return data;
};


function App() {
// ** data call **
const [dataPromise] = useState(()=> dataFetch())
console.log(dataFetch)

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div className="flex justify-center items-center w-full min-h-75">
                            <span className="loading loading-bars loading-xl"></span>
                          </div> }>
        <StackCards dataPromise={dataPromise} />
      </Suspense>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App
