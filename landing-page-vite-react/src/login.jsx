import './Login.css';
import './App.css'
import './index.css'
import logo from './assets/sslogo.png'
import { useState } from 'react'

export default function Login() {
  return (
      <div className="min-h-full flex justify-end py-12 px-4 sm:px-6 lg:px-20 rounded-lg bg-zinc-50 lg:mr-60 border border-red-900 ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-16 w-auto"
              src={logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
           
          </div>


          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-200 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              <div>
              
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-red-500
                  focus:border-red-200 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500
                  border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-red-600 hover:text-red-900 transition duration-100">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-red-500 hover:bg-red-900
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-red-500 transition duration-100"
                >
                Login
              </button>
            </div>
            
          </form>

          <p className='text-m'> Not Registered Yet? <a href="#" className='font-bold hover:ease-in text-l underline text-red-500 hover:text-red-900'> Sign Up Here!</a></p>
        </div>
      </div>
    
  )
}