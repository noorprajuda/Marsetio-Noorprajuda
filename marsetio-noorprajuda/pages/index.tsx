import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store/reducers/repoReducer"
import { fetchRepos } from "../store/action"


const Home: NextPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRepos())
  },[])
  const reposRedux = useSelector((state) => state.repos)
  
  
  if(!reposRedux){
    return (
      <>
      <Navbar/>
      <div className='container ml-[90px] mt-[70px] flex justify-center text-center font-bold text-4xl'>GitHub Repositories List</div>
      <div className='container ml-[90px] mt-[70px] flex justify-center text-center'>
      <h5 className="mt-[200px] text-3xl font-normal text-gray-900 dark:text-white">Loading...</h5></div>
    
      <Footer/>
      </>
    )
  }

  return (
   <>
   <Navbar/>
   <div className='container ml-[90px] mt-[70px] flex justify-center text-center font-bold text-4xl'>GitHub Repositories List</div>
   {reposRedux.map((repo, index)=>{
    return (
      <>
        <div onClick={() => {window.location.href = repo.html_url}} key={index} className="cursor-pointer ml-20 my-10 mr-20 p-4 w-[1300px] text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{repo.full_name}</h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{repo.html_url}</p>
        </div>  
      </>
    )
   })}
   <div className='mb-[100px]'></div>
   <Footer/>
   </>
  )
}

export default Home
