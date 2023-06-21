'use client';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import AddGuestModal from '@/components/AddGuestModal';

interface User {
  id: number;
  name: string;
  description: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>();
  const [clickedAdd, setClickedAdd] = useState<boolean>(false);

  const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR('/api/allUsers', fetcher);

  useEffect(() => {
    if (data) setUsers(data);
  }, [data]);

  if (error) {
    console.log(error);
    return <div>Failed to load</div>;
  }
  if (isLoading)
    return (
      <div className='flex items-center justify-center mt-[5rem]'>
        Loading...
      </div>
    );

  async function addGuest() {
    console.log('Adding guest');
    setClickedAdd(true);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-evenly font-mono text-sm lg:flex'>
        <button
          onClick={addGuest}
          className='border border-black rounded-lg shadow-lg shadow-blue-300 p-3 hover:scale-110 duration-300 hover:font-bold hover:shadow-blue-400'
        >
          Add Guest
        </button>
      </div>
      <label className='flex items-center justify-center text-[2rem]'>
        Guest List
      </label>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <table className='w-full'>
          <tbody>
            <tr className='p-8'>
              <td className='border border-blue-500 p-8'></td>
              <td className='border border-blue-500 p-8 font-medium'>Name</td>
              <td className='border border-blue-500 p-8 font-medium'>
                Description
              </td>
            </tr>
            {users?.map((user: User, i: number) => (
              <tr key={user.id} className='p-8'>
                <td className='border border-blue-500 p-8'>{i + 1}</td>
                <td className='border border-blue-500 p-8'>{user.name}</td>
                <td className='border border-blue-500 p-8'>
                  {user.description}
                </td>
                <td>
                  <Link
                    href={`/user/${user.id}`}
                    className='border border-black rounded-lg shadow-lg shadow-blue-300 p-3 hover:scale-110 duration-300 hover:font-bold hover:shadow-blue-400 m-4'
                  >
                    View Guest
                  </Link>
                  <button className='border border-black rounded-lg shadow-lg shadow-blue-300 p-3 hover:scale-110 duration-300 hover:font-bold hover:shadow-blue-400 m-4'>
                    Remove Guest
                  </button>
                  <button className='border border-black rounded-lg shadow-lg shadow-blue-300 p-3 hover:scale-110 duration-300 hover:font-bold hover:shadow-blue-400 m-4'>
                    Edit Guest
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr className='border border-blue-500 p-8'>
              <td className='border border-blue-500 p-8'>1</td>
            </tr>
            <tr className='border border-blue-500 p-8'>
              <td className='border border-blue-500 p-8'>1</td>
            </tr>
            <tr className='border border-blue-500 p-8'>
              <td className='border border-blue-500 p-8'>1</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <AddGuestModal clickedAdd={clickedAdd} setClickedAdd={setClickedAdd} />
      </div>
    </main>
  );
}
