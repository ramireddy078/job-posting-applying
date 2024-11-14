import React from 'react'


const SignUp = () => {

  return (
    <div className='max-w-xl container mx-auto xl:px-20 px-4'>
      {/* form for posting job  */}
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16 shadow-2xl'>
        <form className="space-y-5">
          <div className="">
            <h2 className='text-center font-bold uppercase text-2xl mb-5 underline w-full text-blue'>Sign Up</h2>
            <div className="w-full">
              <label className="block mb-2 text-lg">First Name</label>
              <input type="text" placeholder='Ex: virat'
                
                className="block w-full flex-1 border-2 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="w-full">
              <label className="block mt-2 mb-2 text-lg">Last Name</label>
              <input type="text" placeholder="Ex: kohli"
                
                className="block w-full flex-1 border-2 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
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
            <div className="w-full">
              <label className="block mt-2 mb-2 text-lg">Confirm Password</label>
              <input type="password" placeholder="Ex:123456@rR"
                
                className="block w-full flex-1 border-2 bg-white py-1.5 pl-3 text-gray-900
                                    placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="w-full">
              <label className="block mt-2 mb-2 text-lg">Mobile Number</label>
              <input type="phone" placeholder="Ex:7671088947"
                
                className="block w-full flex-1 border-2 border-l-4 border-r-4 bg-white py-1.5 pl-3 text-gray-900
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

export default SignUp