import type { Metadata } from 'next';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';

export const metadata: Metadata = {
  title: 'daniel kim',
  description: 'Personal portfolio of Daniel Kim - Creative developer and designer',
};

export default function Home() {
  return (
    <Layout currentPage="home">
      <HomePage />
    </Layout>
  );
}
