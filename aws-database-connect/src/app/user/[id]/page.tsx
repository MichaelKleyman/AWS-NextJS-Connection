'use client';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Link from 'next/link';

type Obj = {
  id: Number;
};

type Params = {
  params: Obj;
};

interface User {
  id: number;
  name: string;
  description: string;
}

export default function User({ params }: Params) {
  const [user, setUser] = useState<User>();

  const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`/api/user/${params.id}`, fetcher);

  useEffect(() => {
    if (data) setUser(data[0]);
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

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-evenly font-mono text-sm lg:flex'>
        <Link
          href='/'
          className='border border-black rounded-lg shadow-lg shadow-blue-300 p-3 hover:scale-110 duration-300 hover:font-bold hover:shadow-blue-400'
        >
          Go back
        </Link>
      </div>
      <label className='flex items-center justify-center text-[2rem]'>
        {user?.name}
      </label>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        {user?.description}
      </div>
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
    </div>
  );
}
