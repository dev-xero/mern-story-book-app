import React from 'react'
import { BiBook } from 'react-icons/bi'
import GoogleIcon from '../img/google_icon.svg'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="mt-[-24px] text-center">
        <h2 className="text-blue-400 text-4xl font-bold mb-[24px] flex justify-center items-center">
          <BiBook />
          <span className="ml-[8px]">Story Books</span>
        </h2>
        <p className="text-gray-400 font-[600] mb-[32px]">
          Create public and private stories about your life
        </p>
        <button className="inline-flex bg-white rounded-md p-[6px] items-center w-[240px] shadow-md shadow-gray-200 hover:shadow-lg transition">
          <img src={GoogleIcon} alt="" className="block w-[32px] h-[32px]" />
          <span className="ml-[8px] font-bold text-gray-400">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  )
}

export default Login
