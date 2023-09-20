"use client";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  router.push('/home');
  return null;
};

export default Page;