import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Octokit, App } from "octokit";
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  // const octokit = new Octokit({
  //   auth: process.env.GITHUB_PAT
  // })
  
  // octokit.request('GET /orgs/{org}/repos', {
  //   org: 'ORG'
  // })

  return (
   <><Navbar/>
   <div className='container mt-[70px] flex justify-center text-center font-bold text-4xl'>GitHub Repositories List</div></>
  )
}

export default Home
