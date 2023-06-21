import { useState } from 'react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-evenly font-mono text-sm lg:flex'>
        <button className='border border-black rounded-lg shadow-lg shadow-blue-300 p-3 hover:scale-110 duration-300 hover:font-bold hover:shadow-blue-400'>
          Add Guest
        </button>
        <button className='border border-black rounded-lg shadow-lg shadow-blue-300 p-3 hover:scale-110 duration-300 hover:font-bold hover:shadow-blue-400'>
          Remove Guest
        </button>
      </div>
      <label className='flex items-center justify-center text-[2rem]'>
        Guest List
      </label>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <table className='w-full'>
          <tbody>
            <tr className='border border-blue-500 p-8'>
              <td className='border border-blue-500 p-8'></td>
              <td className='border border-blue-500 p-8 font-medium'>Name</td>
              <td className='border border-blue-500 p-8 font-medium'>
                Description
              </td>
            </tr>
            <tr className='border border-blue-500 p-8'>
              <td className='border border-blue-500 p-8'>1</td>
            </tr>
            <tr className='border border-blue-500 p-8'>
              <td className='border border-blue-500 p-8'>1</td>
            </tr>
            <tr className='border border-blue-500 p-8'>
              <td className='border border-blue-500 p-8'>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
    </main>
  );
}
