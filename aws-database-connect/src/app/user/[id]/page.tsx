'use client';
import useSWR from 'swr';
import Link from 'next/link';

type Obj = {
  id: Number;
};

type Params = {
  params: Obj;
};

export default function User({ params }: Params) {
  const fetcher = (...args: Parameters<typeof fetch>): Promise<any> =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`/api/user/${params.id}`, fetcher);
  // console.log(data);

  return <div>{params.id.toString()}</div>;
}
