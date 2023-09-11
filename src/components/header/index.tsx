import React from 'react'
export const Header = () => {
  return (
    <>
    <header className='w-full mx-2 md:mx-0 justify-center gap-2 h-32 flex flex-col'>
      <div className='flex xl:w-[1248px] w-full mx-auto items-center justify-between'>
        <div className='flex flex-col space-y-2'>
          <span className='text-black font-semibold text-4xl'>You<span className='text-red-500'>Tube</span></span>
          <span>Broadcast Yourself</span>
        </div>
        <div className='lg:flex items-center gap-1 hidden'>
          <input type="text" className='px-10 py-2 border-2 rounded-md'/>
          <button className='border-2 bg-black text-white px-6 py-2 rounded-md'>Search</button>
        </div>
        <div className='hidden lg:flex'>
          <span>
            <a href="#" className='text-blue-700 font-semibold'>Create Account</a> or <a href="#" className='text-blue-700 font-semibold'>sign-in</a>
          </span>
        </div>
      </div>
      <div className='xl:w-[1248px] w-full md:mx-auto flex md:justify-end'>
        <nav className='flex items-center flex-col text-center lg:text-start md:flex-row xl:w-[900px] justify-between'>
          <ul className='flex gap-4 text-base md:text-lg'>
            <li className='cursor-pointer hover:font-semibold'>Home</li>
            <li className='cursor-pointer hover:font-semibold'>Videos</li>
            <li className='cursor-pointer hover:font-semibold'>Channels</li>
          </ul>
          <ul className='flex gap-4 text-base md:text-lg'>
            <li className='cursor-pointer hover:font-semibold'>Subscriptions</li>
            <li className='cursor-pointer hover:font-semibold'>History</li>
            <li className='cursor-pointer hover:font-semibold'>Upload</li>
          </ul>
        </nav>
      </div>
    </header>
    <div className='xl:w-[1248px] xl:mx-auto border-b-2 border-black'></div>
    </>
  )
}
