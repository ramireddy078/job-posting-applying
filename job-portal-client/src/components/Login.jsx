import React from 'react'

const Login = () => {

  return (
    <div className='max-w-xl flex items-center justify-center h-screen container mx-auto xl:px-20 px-4'>
      {/* form for posting job  */}
      <div className='bg-[#FAFAFA] py-10 px-4 max-w-lg w-full lg:px-16 shadow-2xl'>
        <form className="space-y-5">
          <div className="">
            <h2 className='text-center font-bold uppercase text-2xl mb-5 underline w-full text-blue'>Login</h2>
            <div>
              <label className='block mt-2 mb-2 text-lg'>Official Email Id</label>
              <input type="email" placeholder="Ex: company@gmail.com"
                className="block w-full flex-1 border-2 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="w-full">
              <label className="block mt-2 mb-2 text-lg">Password</label>
              <input type="password" placeholder='Ex: 123456@rR'
                className="block w-full flex-1 border-2 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <input type="submit" className="block mt-12  bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />
        </form>
      </div>
    </div>
  )
}

export default Login
