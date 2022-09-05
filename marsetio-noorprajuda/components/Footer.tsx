import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Octokit, App } from "octokit";

const Footer: NextPage = () => {

  return (
    <>
      <footer className="fixed inset-x-0 bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Marsetio Noorprajuda
        </a>
        . All Rights Reserved.
      </span>
      </footer>
    </>
  )
}

export default Footer
