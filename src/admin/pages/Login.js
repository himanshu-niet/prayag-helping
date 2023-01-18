import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="h-screen font-manrope overflow-hidden bg-slate-300">
        <div className="lg:w-[40%] md:w-[50%] sm:w-[60%] w-[90%] bg-white shadow-xl rounded-lg  my-10  mx-auto">
          <div className="bg-primary rounded-t-lg">
            <h1 className="text-2xl font-semibold text-white text-center py-7 ">
              Admin Login
            </h1>
          </div>
          <div className="p-7">
            <input
              className=" px-2 py-2 my-3 border border-1 border-primary  focus:outline-none w-full text-md placeholder:text-sm placeholder:font-normal"
              type="email"
              required
              placeholder="Enter Admin Email"
            />
            <input
              className=" px-2 py-2  my-3  border border-1 border-primary  focus:outline-none w-full text-md placeholder:text-sm placeholder:font-normal"
              type="password"
              required
              placeholder="Enter Password"
            />
            <div className="flex my-8 justify-between">
              <a href='/admin/dashboard' className=" font-semibold text-secondary border border-1 duration-500 border-primary hover:bg-primary hover:text-white px-6 py-2">
                LOGIN
              </a>
              <a href='/' className="text-md text-secondary font-semibold">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login